import axios from "axios";

export default axios.create({
  baseURL: "http://epriority.test/api/m/",
  headers: {
    "X-APPID": "com.eoa.emobility",
    "X-VER": "0.00.01"
  }
});
