import * as action from "./action";

export const initialState = {
  card: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {  
        ...state,
        card: [...state.card, action.item],
      };

    case "ADD_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
