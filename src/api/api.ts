import axios from "axios";
import { store } from "../store/store";
import { logout, refresh } from "../store/user/user.actions";

const { REACT_APP_BASE_URL } = process.env;

export const API_URL = `${REACT_APP_BASE_URL}`;
const $api = axios.create({
  headers: {
    "Content-type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
  baseURL: API_URL,
  // withCredentials: true,
});

$api.interceptors.response.use(
  (res) => res,
  async (AxiosError) => {
    const originalConfig = AxiosError?.config;
    if (AxiosError.response?.status === 401 && !originalConfig.isRetry) {
      originalConfig.isRetry = true;
      try {
        await store.dispatch(refresh());
        return await $api(originalConfig);
      } catch (e) {
        await store.dispatch(logout());
        window.location.reload();
      }
    }

    return Promise.reject(AxiosError);
  }
);

export default $api;
