import { put, call, takeLatest } from "redux-saga/effects";
import * as actionType from "../actions/actionType";
import axios from '../services/axios';


const apiRemove = key => {
  axios
    .delete(`${key.uid}/cards/${key.payload}.json`)
    .then()
    .catch(err => console.log(err));
};

export function* removeCardSaga(action) {
  yield call(apiRemove, action);
  yield put({
    type: actionType.REMOVE_CARD_SUCCESS,
    payload: action.payload,
  });
}

export function* watcherSaga() {
  yield takeLatest(actionType.REMOVE_CARD, removeCardSaga);
}
