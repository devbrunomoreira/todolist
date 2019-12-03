import * as actionType from "../actions/actionType";

const initialState = {
  listCard: []
};
export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_CARD:
      return {
        ...state,
        listCard: [...state.listCard, action.payload]
      };
    case actionType.ADD_CARD_SUCCESS:
      console.log("Add_card_success");
      return state;
    case actionType.HANDLE_CHECK:
      let newListCard = state.listCard;
      const newIndex = newListCard.findIndex(
        item => item.id === action.payload
      );
      newListCard[newIndex] = {
        ...newListCard[newIndex],
        checked: !newListCard[newIndex].checked
      };
      return {
        ...state,
        listCard: newListCard
      };
    case actionType.REMOVE_CARD:
      let newListRemove = state.listCard.filter(
        item => item.id !== action.payload
      );
      return {
        ...state,
        listCard: newListRemove
      };
    case actionType.FETCH_DATA:
      return state;
    case actionType.FETCH_DATA_SUCCESS:
      if (action.payload === undefined) {
        return {
          ...state,
          listCard: []
        };
      }
      return {
        ...state,
        listCard: action.payload
      };
    case actionType.FETCH_DATA_FAILURE:
      return state;
    default:
      return state;
  }
};
