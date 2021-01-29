import * as action from "./action";

export const initialState = {
  card: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        card: [state.card, action.item],
      };
    default:
      return state;
  }
};
export default reducer;
