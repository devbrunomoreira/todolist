import {
 put, takeLatest, takeEvery, call 
} from 'redux-saga/effects';
import * as actionType from '../actions/actionType';

import firebase from '../firebase';

export function* loginWithFirebase(payload) {
  const response = yield firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(user => user)
    .catch(error => error);
  return response;
}

export function* loginUser({ payload }) {
  const response = yield call(loginWithFirebase, payload);
  if (response.code) {
    yield put({
      type: actionType.LOGIN_ERROR,
      payload: response.message,
    });
  } else {
    yield put({
      type: actionType.RECIVE_LOGIN,
      payload: response,
    });
  }
}

export function* loginUserFB() {
  const user = yield call(handleLoginWithFacebook);
  yield put({
    type: actionType.RECIVE_LOGIN_FB,
    payload: user,
  });
}

export function* handleLoginWithFacebook() {
  const provider = yield new firebase.auth.FacebookAuthProvider();
  const user = yield firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => result.user)
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      const { credential } = error;
      // ...
    });
  console.log('useeer:', user);
  return user;
}

export function* watcherSaga() {
  yield takeLatest(actionType.REQUEST_LOGIN, loginUser);
  yield takeLatest(actionType.REQUEST_LOGIN_FB, loginUserFB);
}
