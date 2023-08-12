import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import cardReducer from "../modules/redux/slices/cards.slice";
import cardsSaga from "../modules/redux/sagas/cards.saga";
import persistConfig from "../modules/redux/persist/persistConfig";

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, cardReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(cardsSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
