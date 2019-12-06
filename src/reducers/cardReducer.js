import * as actionType from '../actions/actionType';

const initialState = {
  listCard: [],
};
export const cardReducer = (state = initialState, action) => {
  let newListCard;
  let newIndex;
  switch (action.type) {
    case actionType.ADD_CARD:
      return state;
    case actionType.ADD_CARD_SUCCESS:
      return {
        ...state,
        listCard: [...state.listCard, action.payload],
      };
    case actionType.HANDLE_CHECK:
      newListCard = state.listCard;
      newIndex = newListCard.findIndex(item => item.name === action.payload);
      newListCard[newIndex] = {
        ...newListCard[newIndex],
        checked: !newListCard[newIndex].checked,
      };
      return {
        ...state,
        listCard: newListCard,
      };
    case actionType.REMOVE_CARD:
      return state;
    case actionType.REMOVE_CARD_SUCCESS:
      return {
        ...state,
        listCard: state.listCard.filter(item => item.name !== action.payload),
      };
    case actionType.FETCH_DATA:
      return state;
    case actionType.FETCH_DATA_SUCCESS:
      if (action.payload === undefined) {
        return {
          ...state,
          listCard: [],
        };
      }
      return {
        ...state,
        listCard: action.payload,
      };
    case actionType.FETCH_DATA_FAILURE:
      return state;
    default:
      return state;
  }
};

export default cardReducer;
