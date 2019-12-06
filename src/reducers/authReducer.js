import * as actionType from "../actions/actionType";

const initialState = {
  user: {},
  error: "",
  isLogginIn: false,
  authenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REQUEST_LOGIN:
      console.log("reducer request_login");
      return state;
    case actionType.RECIVE_LOGIN:
      return {
        ...state,
        user: action.payload,
        isLogginIn: true,
        authenticated: true,
      };
    case actionType.LOGIN_ERROR:
      console.log("reducer login error");
      return {
        ...state,
        error: action.payload,
        isLogginIn: false,
      };
    case actionType.REQUEST_LOGIN_FB:
      return state;
    case actionType.RECIVE_LOGIN_FB:
      return {
        ...state,
        user: action.payload,
        isLogginIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
