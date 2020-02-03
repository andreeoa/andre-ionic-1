import { combineReducers } from "redux";
import productReducer from "./product/reducer";
import userReducer from "./users/reducer";
import authReducer from "./auth/reducer";
import logoutReducer from "./auth/logout/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  users: userReducer,
  auth: authReducer,
  logout: logoutReducer
});

export default rootReducer;
