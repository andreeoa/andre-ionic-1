import axios from "axios";

const requestConfig = config => {
  const authObj = JSON.parse(localStorage.getItem("_cap_auth-keys"));
  config.headers.common["Authorization"] = authObj ? authObj.apiKey : null;
  config.headers.common["X-EUUID"] = authObj ? authObj.EUUID : null;
  config.headers.common["X-APPID"] = "com.eoa.emobility";
  config.headers.common["X-VER"] = "0.00.01";
  config.baseURL = "http://epriority.test/api/m/";
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
  return Promise.reject(error);
};

axios.interceptors.response.use(response, responseError);

export default axios;
