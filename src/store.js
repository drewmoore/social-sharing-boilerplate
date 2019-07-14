import { createStore } from "redux";
import rootReducer from "./reducers";

const initializeStore = (initialState) => (
  createStore(rootReducer(initialState))
);

export default initializeStore;
