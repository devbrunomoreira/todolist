import * as actionType from '../actions/actionType'


const initialState = {
  newValue: ""
};
export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
