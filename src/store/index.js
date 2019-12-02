import { createStore, applyMiddleware } from "redux";
import { Reducers } from "../reducers";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(
         Reducers,
         applyMiddleware(logger, thunk, sagaMiddleware)
       );
