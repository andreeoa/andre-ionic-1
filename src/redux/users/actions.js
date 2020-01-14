import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_DETAIL_REQUEST,
  FETCH_USER_DETAIL_SUCCESS,
  FETCH_USER_DETAIL_FAILURE
} from "./types";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

//================= User Detail

export const fetchUserDetailRequest = () => {
  return {
    type: FETCH_USER_DETAIL_REQUEST
  };
};

export const fetchUserDetailSuccess = user => {
  return {
    type: FETCH_USER_DETAIL_SUCCESS,
    payload: user
  };
};

export const fetchUserDetailFailure = error => {
  return {
    type: FETCH_USER_DETAIL_FAILURE,
    payload: error
  };
};

export const fetchUser = id => {
  return async dispatch => {
    try {
      dispatch(fetchUserDetailRequest());
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const user = response.data;
      dispatch(fetchUserDetailSuccess(user));
    } catch (error) {
      dispatch(fetchUserDetailFailure(error.message));
    }
  };
};
