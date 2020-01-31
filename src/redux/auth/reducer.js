import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE
} from "./types";

const initialState = {
  loading: false,
  error: "",
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        user: {}
      };
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case USER_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
