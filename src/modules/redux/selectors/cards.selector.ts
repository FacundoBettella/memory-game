import { RootState } from "../../../store/store";

export const selectCards = (state: RootState) => state.cards;
export const fetchLoading = (state: RootState) => state.isLoading;
export const hasError = (state: RootState) => state.hasError;
