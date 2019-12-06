import { put, call, takeLatest } from 'redux-saga/effects';
import axios from '../services/axios';
import * as actionType from '../actions/actionType';

const apiCall = (card, uid) => axios
  .post(`${uid}/cards.json`, card)
  .then(res => res.data.name)
  .catch(error => console.log(error));

export function* addCardSaga(action) {
  const nameID = yield call(apiCall, action.payload, action.uid);
  action.payload.name = nameID;
  yield put({
    type: actionType.ADD_CARD_SUCCESS,
    payload: action.payload,
  });
}

const apiGetDataFromFirebase = uid => axios
  .get(`${uid}/cards.json`)
  .then(res => Object.entries(res.data).map(([key, value]) => ({
    ...value,
    name: key,
  })))
  .catch(err => console.log(err));

export function* fetchDataFromFirebase(action) {
  const data = yield apiGetDataFromFirebase(action.uid);
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
