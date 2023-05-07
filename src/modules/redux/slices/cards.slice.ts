import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICard, ICards } from "../../domain/model/card/card.model";

export interface ICheckCardsTitle {
  id: string;
  title: string;
}

const initialState: ICards = {
  cards: [],
  hasError: false,
  isLoading: false,
  gameResult: false
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    fetchCards(state: ICards) {
      state.isLoading = true;
    },

    fetchCardSuccess(state: ICards, action: PayloadAction<ICard[]>) {
      const data = action.payload || [];
      state.cards = data;
      state.isLoading = false;
    },

    errorFetchingCards(state: ICards) {
      state.isLoading = false;
      state.hasError = true;
    },

    flipCard: (state: ICards, action: PayloadAction<string>) => {
      const index = state.cards.findIndex((card) => card.id === action.payload);
      state.cards[index].selected = true;
    },

    unFlipCard: (state: ICards, action: PayloadAction<string>) => {
      const index = state.cards.findIndex((card) => card.id === action.payload);
      state.cards[index].selected = false;
    },

    checkCardsName(
      state: ICards,
      action: PayloadAction<{
        card1: ICheckCardsTitle;
        card2: ICheckCardsTitle;
      }>
    ) {
      const { card1, card2 } = action.payload;

      const cardIndex1 = state.cards.findIndex((card) => card.id === card1.id);
      const cardIndex2 = state.cards.findIndex((card) => card.id === card2.id);

      if (cardIndex1 !== -1 && cardIndex2 !== -1) {
        if (card1.title === card2.title) {
          state.cards[cardIndex1].state = true;
          state.cards[cardIndex2].state = true;
        } else {
          state.cards[cardIndex1].state = false;
          state.cards[cardIndex2].state = false;
        }
      }      
    },

    resetCardState(state: ICards) {
      state.cards.forEach((card) => {
        card.state = false;
        card.selected = false;
      });
    },
    
    gameResult: (state: ICards) => {
      state.gameResult = state.cards.every((card) => card.state);
    }    
  },
});

export const {
  fetchCards,
  fetchCardSuccess,
  errorFetchingCards,
  flipCard,
  unFlipCard,
  checkCardsName,
  resetCardState,
  gameResult
} = cardsSlice.actions;

export default cardsSlice.reducer;
