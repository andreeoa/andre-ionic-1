import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_DETAIL_REQUEST,
  FETCH_USER_DETAIL_SUCCESS,
  FETCH_USER_DETAIL_FAILURE
} from "./types";

const initialState = {
  loading: false,
  users: [],
  error: "",
  //======= User Detail
  user: {},
  user_loading: false,
  user_error: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ""
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload
      };
    //================= User Detail
    case FETCH_USER_DETAIL_REQUEST:
      return {
        ...state,
        user_loading: true,
        user: {}
      };
    case FETCH_USER_DETAIL_SUCCESS:
      return {
        ...state,
        user_loading: false,
        user: action.payload,
        user_error: ""
      };
    case FETCH_USER_DETAIL_FAILURE:
      return {
        ...state,
        user_loading: false,
        user: {},
        user_error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
