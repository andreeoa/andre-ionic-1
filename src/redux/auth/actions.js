import axios from "../../plugins/axios";
import { Plugins } from "@capacitor/core";

import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE
} from "./types";

export const userAuthRequest = () => {
  return {
    type: USER_AUTH_REQUEST
  };
};

export const userAuthSuccess = user => {
  return {
    type: USER_AUTH_SUCCESS,
    payload: user
  };
};

export const userAuthFailure = error => {
  return {
    type: USER_AUTH_FAILURE,
    payload: error
  };
};

const setAuthKeys = async user => {
  const { Storage } = Plugins;
  const { apiKey, EUUID } = user;
  await Storage.set({
    key: "auth-keys",
    value: JSON.stringify({
      apiKey,
      EUUID
    })
  });
};

export const authenticate = (_user, ownProps) => {
  return async dispatch => {
    try {
      dispatch(userAuthRequest());
      const response = await axios.post("/login", JSON.stringify(_user));
      const user = response.data;
      dispatch(userAuthSuccess(user));
      setAuthKeys(user);
      ownProps.history.push("/dashboard");
    } catch (error) {
      const { message } = error.response.data;
      dispatch(userAuthFailure(message));
    }
  };
};
