import { call, put, takeLatest } from "redux-saga/effects";

import { fetchCardSuccess, errorFetchingCards, fetchCards } from "../slices/cards.slice";

import { ICard } from "../../domain/model/card/card.model";
import { CardService } from "../../services/card.service";

const cardService = new CardService();

function* featchApiCards() {
  try {
    const cards: ICard[] = yield call(cardService.fetchCards);
    yield put(fetchCardSuccess(cards));
  } catch (error) {
    yield put(errorFetchingCards());
  }
}

export default function* cardsSaga() {
  yield takeLatest(fetchCards.type, featchApiCards);
}
