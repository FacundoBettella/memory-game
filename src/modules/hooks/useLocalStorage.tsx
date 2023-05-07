// import { useEffect, useReducer } from "react";

// type Action = { type: string, payload: string | Payload };
// type Payload = { value: string, isSynchronized: boolean };

// const useLocalStorage = (itemName: string, initialValue = "") => {
//   const [state, dispatch] = useReducer(reducer, initialState(initialValue));

//   const { item, error } = state;

//   const onSuccess = (parsedItem: string) =>
//     dispatch({
//       type: actionTypes.item,
//       payload: { value: parsedItem, isSynchronized: true },
//     });

//   const onError = (error: string) =>
//     dispatch({
//       type: actionTypes.error,
//       payload: error,
//     });


//   const saveNewItem = (itemName: string, itemValue: string) => {
//     try {
//       const localStorageItem = localStorage.getItem(itemName);
//       let parsedItem = JSON.stringify(itemValue);

//       if (!localStorageItem) {
//         localStorage.setItem(itemName, parsedItem);
//       } else {
//         localStorage.setItem(itemName, parsedItem);
//         parsedItem = itemValue;
//       }

//       onSuccess(parsedItem);
//     } catch (error) {
//       onError(error);
//     }
//   };

//   return {
//     item,
//     error,
//     saveNewItem,
//   };
// };

// // Reducer ==============================================================================================>
// const initialState = (initialValue: {}) => ({
//   item: initialValue,
//   error: false,
//   errorMessage: "",
//   synchronizedItem: false,
// });

// const actionTypes = {
//   item: "ITEM",
//   error: "ERROR",
//   synchronize: "SYNCHRONIZE",
// };

// const reducerObject = (state: {}, action: Action) => ({
//   [actionTypes.item]: {
//     item: (action.payload as Payload).value,
//     error: false,
//     errorMessage: "",
//   },
//   [actionTypes.error]: {
//     ...state,
//     error: true,
//     errorMessage: action.payload,
//   },
// });

// const reducer = (state: {}, action: Action) => {
//   return reducerObject(state, action)[action.type] || state;
// };

// export { useLocalStorage };

import { useEffect, useReducer } from "react";

type Action = { type: string, payload: string | Payload };
type Payload = { value: string };

interface LocalStorageReturn {
  item: string;
  error: string;
  saveNewItem: (itemName: string, itemValue: string) => void;
}

const useLocalStorage = (itemName: string, initialValue = ""): LocalStorageReturn => {
  const [state, dispatch] = useReducer(reducer, initialState(initialValue));

  const { item, error } = state;

  const onSuccess = (parsedItem: string) =>
    dispatch({
      type: actionTypes.item,
      payload: { value: parsedItem },
    });

  const onError = (error: Error) =>
    dispatch({
      type: actionTypes.error,
      payload: error.message,
    });

  const saveNewItem = (itemName: string, itemValue: string) => {
    try {
      let parsedItem = JSON.stringify(itemValue);
      localStorage.setItem(itemName, parsedItem);
      onSuccess(parsedItem);
    } catch (error: any) {
      onError(error);
    }
  };

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      if (localStorageItem !== null) {
        const parsedItem = JSON.parse(localStorageItem);
        onSuccess(parsedItem);
      }
    } catch (error: any) {
      onError(error);
    }
  }, [itemName]);

  return {
    item,
    error,
    saveNewItem,
  };
};

// Reducer
const initialState = (initialValue: string) => ({
  item: initialValue,
  error: false,
  errorMessage: "",
  isSynchronized: false,
});

const actionTypes = {
  item: "ITEM",
  error: "ERROR",
};

const reducerObject = (state: any, action: Action) => ({
  [actionTypes.item]: {
    item: (action.payload as Payload).value,
    error: false,
    errorMessage: "",
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    errorMessage: action.payload,
  },
});

const reducer = (state: any, action: Action) => {
  return reducerObject(state, action)[action.type] || state;
};

export { useLocalStorage };