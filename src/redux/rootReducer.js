import { combineReducers } from "redux";
import productReducer from "./product/reducer";
import userReducer from "./users/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  users: userReducer,
  auth: authReducer
});

export default rootReducer;
