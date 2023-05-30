import { boot } from "quasar/wrappers";
import axios from "axios";
import Config from "../../config";
import { Notify } from "quasar";
import { LoadingBar } from "quasar";

function intercepterRes(name, isDev = false) {
  return function (response) {
    let { data, status } = response;

    if (isDev) {
      console.log("AJAX", name, status, data);
    }

    try {
      if (status && status !== 200) {
        let message = `${name} AJAX Error : ${status}`;
        try {
          Notify.create({ type: "negative", message: message });
          LoadingBar.increment(50);
          LoadingBar.setDefaults({
            color: "purple",
            size: "5px",
            position: "bottom",
          });
        } catch (error) {}
        throw new Error(`${name} AJAX Error : ${status}`);
      }

      try {
        if (data.status != 200) {
          LoadingBar.increment(50);
          LoadingBar.setDefaults({
            color: "green",
            size: "5px",
            position: "bottom",
          });
          console.log("data.message", data.message);
          Notify.create({
            type: "negative",
            message: data.message,
          });
        } else {
          LoadingBar.increment(50);
          LoadingBar.setDefaults({
            color: "blue",
            size: "5px",
            position: "top",
          });
        }
        return data;
      } catch (error) {
        if (isDev) {
          console.error(error);
        }
      }
    } catch (error) {
      if (isDev) {
        console.error(error);
      }
      return false;
    }
  };
}

const isDev = process.env.NODE_ENV == "development";
const config = isDev ? Config.development : Config.production;
const api = axios.create({ baseURL: config.API_SERVER, withCredentials: true });
api.interceptors.response.use(intercepterRes("api", isDev));

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api, axios };
