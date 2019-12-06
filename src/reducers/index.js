import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import authReducer from './authReducer';

const Reducers = combineReducers({
  cardState: cardReducer,
  authState: authReducer,
});

export default Reducers;
