import axios from "../services/axios";
import * as actionType from "../actions/actionType";

const initialState = {
  listCard: []
};
export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_CARD:
      axios
        .post("/cards.json", action.payload)
        .then(res => console.log(res))
        .catch(error => console.log(error));
      return {
        ...state,
        listCard: [...state.listCard, action.payload]
      };
      case actionType.ADD_CARD_SUCCES:
        return{
          ...state,
          listCard: [...state.listCard, action.payload]
        }
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
        let newListRemove = state.listCard.filter((item)=>(
          item.id !== action.payload
        ))
        return {
          ...state,
          listCard: newListRemove
        }
    default:
      return state;
  }
};
