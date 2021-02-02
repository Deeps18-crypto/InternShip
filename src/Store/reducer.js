import * as action from "./action";

export const initialState = {
  card: [],
  user: null,
  info:[]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        card: [state.card, action.item],
      };
      case "ADD_INFO":
        return {
          ...state,
          info: [state.info, action.item],
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
