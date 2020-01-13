import { combineReducers } from "redux";
import productReducer from "./product/reducer";
import userReducer from "./users/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  users: userReducer
});

export default rootReducer;
