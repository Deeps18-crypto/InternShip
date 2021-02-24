import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../auth/reducer/rootreducer";
import thunk from "redux-thunk";
import { sessionService } from "redux-react-session";

const initialState = {};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

sessionService.initSessionService(store);

export default store;
