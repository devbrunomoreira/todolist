import * as actionType from "./actionType";

export const addCard = value => {
  return {
    type: actionType.ADD_CARD,
    payload: value
  };
};

export const handleCheck = value => ({
  type: actionType.HANDLE_CHECK,
  payload: value
});

export const removeCard = value => ({
  type: actionType.REMOVE_CARD,
  payload: value
});

export const fetchData = () => {
  return {
    type: actionType.FETCH_DATA
  };
};

export const fetchDataSuccess = value => {
  return {
    type: actionType.FETCH_DATA_SUCCESS,
    payload: value
  };
};
