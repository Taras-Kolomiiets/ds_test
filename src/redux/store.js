import { applyMiddleware, createStore, combineReducers } from "redux";
import movies from "./movies-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  movies,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
