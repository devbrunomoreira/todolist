import { cardReducer } from "./cardReducer";

import { combineReducers } from "redux";

export const Reducers = combineReducers({
  cardState: cardReducer
});
