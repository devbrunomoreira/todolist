import * as actionType from './actionType';

export const addCard = (value, uid) => ({
  type: actionType.ADD_CARD,
  payload: value,
  uid: uid,
});

export const handleCheck = value => ({
  type: actionType.HANDLE_CHECK,
  payload: value,
});

export const removeCard = (value, uid) => ({
  type: actionType.REMOVE_CARD,
  payload: value,
  uid: uid,
});

export const fetchData = (uid) => ({
  type: actionType.FETCH_DATA,
  uid: uid,
});

export const fetchDataSuccess = value => ({
  type: actionType.FETCH_DATA_SUCCESS,
  payload: value,
});

export const requestLogin = (value) => ({
  type: actionType.REQUEST_LOGIN,
  payload: value,
});

export const reciveLogin = user => ({
  type: actionType.RECIVE_LOGIN,
  payload: user,
});

export const loginError = error => ({
  type: actionType.LOGIN_ERROR,
  payload: error,
});

export const requestLoginFb = () => ({
  type: actionType.REQUEST_LOGIN_FB,
});
