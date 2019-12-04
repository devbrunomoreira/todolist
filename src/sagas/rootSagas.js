import { all } from "redux-saga/effects";
import * as addCard from "./addCardSaga";
import * as removeCard from './removeCardSaga'

export default function* rootSaga() {
  yield all([addCard.watcherSaga(), removeCard.watcherSaga()]);
}
