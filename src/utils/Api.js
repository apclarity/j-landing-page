import axios from "axios";
import router from "@/router";

const api = axios.create({
  //baseURL: 'https://smartit-32ba08c9.localhost.run/pendaftaran-api/public/api',
  baseURL: 'http://localhost:9010/api/v1',
  // baseURL: "http://192.168.100.160:9010/api/v1",
  //baseURL: "https://dev.apijobhun.com/api/v1",
});

api.defaults.timeout = 10000;
api.interceptors.request.use(
  (config) => {
    store.commit("setOverlay", true);
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  (error) => {
    store.commit("setOverlay", false);
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    store.commit("setOverlay", false);
    if (response.status >= 200 || response.status < 300) {
      if (
        response.config.method == "post" ||
        response.config.method == "put" ||
        response.config.method == "delete"
      ) {
        store.commit("setDashboardAlert", {
          status: response.data.success,
          visible: true,
          description: response.data.message,
        });
      }
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // store.commit("setOverlay",false);
    console.log(error.response.data);
    let message = error.response.data.message;
    if (error.response.data.statusCode == 401) {
      message = "Sesi kamu sudah habis, silakan login ulang";
    }
    store.commit("setDashboardAlert", {
      status: error.response.data.success,
      visible: true,
      description: message,
    });
    if (error.response.data.statusCode == 401) {
      localStorage.removeItem("token");
      router.push("/login");
    }
    return Promise.reject(error.response.data);
  }
);

export default api;
