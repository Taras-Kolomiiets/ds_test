import { applyMiddleware, createStore, combineReducers } from "redux";
import filmsReducer from "./films-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  filmsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
