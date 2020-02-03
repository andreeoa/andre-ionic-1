import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./types";
import axios from "../../../plugins/axios";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const logoutFailure = error => {
  return {
    type: LOGOUT_FAILURE,
    payload: error
  };
};

const unsetAuthKeys = async () => {
  await Storage.remove({ key: "auth-keys" });
};

export const logout = ownProps => {
  return async dispatch => {
    try {
      dispatch(logoutRequest());
      const authObj = JSON.parse(localStorage.getItem("_cap_auth-keys"));
      const data = {
        EUUID: authObj.EUUID,
        APPID: "com.eoa.emobility"
      };
      await axios.post("/logout", JSON.stringify(data));
      dispatch(logoutSuccess());
      unsetAuthKeys();
      ownProps.history.push("/signin");
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        dispatch(logoutFailure(message));
      }
    }
  };
};
