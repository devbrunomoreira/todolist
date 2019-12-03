import { all } from "redux-saga/effects";
import * as addCard from "./addCardSaga";

export default function* rootSaga() {
  yield all([addCard.watcherSaga()]);
}
