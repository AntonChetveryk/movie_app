import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

const logger = store => next => action => {
  console.log("store", store.getState());
  console.log("type", action.type);
  console.log("payload", action.payload);
  return next(action);
};

export default store;
