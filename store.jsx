import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"; // Import Redux Thunk middleware
import rootReducer from "./reducers/index";

// Create Redux store with middleware applied
const store = createStore(
  rootReducer, // Combined reducers
//   applyMiddleware(thunkMiddleware) // Apply Redux Thunk middleware
);

export default store;
