import axios from "../../plugins/axios";
import { Plugins } from "@capacitor/core";

import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE
} from "./types";

const { Storage } = Plugins;

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
  const { apiKey, EUUID } = user;
  await Storage.set({
    key: "auth-keys",
    value: JSON.stringify({
      apiKey,
      EUUID
    })
  });
};

const getUserInfo = async ownProps => {
  return async dispatch => {
    try {
      const user = await axios.get("/app/get-user-info");
      dispatch(userAuthSuccess(user.data[0]));
      ownProps.history.push("/dashboard");
    } catch (error) {}
  };
};

export const authenticate = (_user, ownProps) => {
  return async dispatch => {
    try {
      dispatch(userAuthRequest());
      const response = await axios.post("/login", JSON.stringify(_user));
      await setAuthKeys(response.data);
      dispatch(await getUserInfo(ownProps));
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        dispatch(userAuthFailure(message));
      }
    }
  };
};

export const auth = ownProps => {
  return async () => {
    const ret = await Storage.get({ key: "auth-keys" });
    if (!JSON.parse(ret.value)) {
      ownProps.history.push("/signin");
    }
  };
};

export const nonAuth = ownProps => {
  return async () => {
    const ret = await Storage.get({ key: "auth-keys" });
    if (JSON.parse(ret.value)) {
      ownProps.history.push("/dashboard");
    }
  };
};
