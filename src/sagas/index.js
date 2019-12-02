import { takeEvery } from "redux-saga/effects";
import axios from "../services/axios";

const apiCall = card =>
  axios
    .post("/cards.json", card)
    .then(res => console.log(res))
    .catch(error => console.log(error));

const handleNewCard = function* handleNewCard(params) {
  const socket = new WebSocket("ws://localhost:8989");

  yield call(apiCall, payload);
  yield takeEvery("ADD_MESSAGE", action => {
    socket.send(JSON.stringify(action));
  });
};

export default handleNewCard;
