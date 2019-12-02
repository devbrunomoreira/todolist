import * as actionType from "./actionType";

export const addCard = value => ({
  type: actionType.ADD_CARD,
  payload: value
});



export const handleCheck = value => ({
  type: actionType.HANDLE_CHECK,
  payload: value
});

export const removeCard = value => ({
  type: actionType.REMOVE_CARD,
  payload: value
});
