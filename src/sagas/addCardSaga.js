import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import axios from "../services/axios";
import * as actionType from "../actions/actionType";

const apiCall = card =>
  axios
    .post("/cards.json", card)
    .then(res => console.log(res))
    .catch(error => console.log(error));

export function* addCardSaga(action) {
  console.log("params: ", action);
  yield call(apiCall, action.payload);
  yield put({
    type: actionType.ADD_CARD_SUCCESS
  });
}

const apiGetDataFromFirebase = () =>
  axios
    .get("/cards.json")
    .then(res => {
      return Object.values(res.data);
    })
    .catch(err => console.log(err));

export function* fetchDataFromFirebase(action) {
  const data = yield apiGetDataFromFirebase();
  try {
    yield put({ type: actionType.FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: actionType.FETCH_DATA_FAILURE, error });
  }
}

export function* watcherSaga() {
  yield takeLatest(actionType.ADD_CARD, addCardSaga);
  yield takeLatest(actionType.FETCH_DATA, fetchDataFromFirebase);
}
