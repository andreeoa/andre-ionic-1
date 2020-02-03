import axios from "axios";
import { unAuthDialog } from "./global";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

const getObject = async () => {
  const ret = await Storage.get({ key: "auth-keys" });
  return JSON.parse(ret.value);
};

const requestConfig = async config => {
  const authObj = await getObject();
  config.headers.common["Authorization"] = authObj ? authObj.apiKey : null;
  config.headers.common["X-EUUID"] = authObj ? authObj.EUUID : null;
  config.headers.common["X-APPID"] = "com.eoa.emobility";
  config.headers.common["X-VER"] = "0.00.01";
  config.baseURL = process.env.REACT_APP_BASE_URL;
  return config;
};

const requestError = error => {
  return Promise.reject(error);
};

axios.interceptors.request.use(requestConfig, requestError);

const response = response => {
  return response;
};

const responseError = error => {
  if (error.response) {
    const { status, message } = error.response.data;
    if (status === "03" || status === "04") {
      unAuthDialog(message);
    }
  }
  return Promise.reject(error);
};

axios.interceptors.response.use(response, responseError);

export default axios;
