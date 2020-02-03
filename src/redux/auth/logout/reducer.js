import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./types";

const initialState = {
  loading: false,
  error: ""
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default logoutReducer;
