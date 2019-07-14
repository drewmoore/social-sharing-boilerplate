import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";

const initializeReducers = (initialState) => (
  combineReducers({ visibilityFilter: visibilityFilter(initialState.visibilityFilter) })
);

export default initializeReducers;
