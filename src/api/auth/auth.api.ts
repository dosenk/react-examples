import axios from "axios";
import $api, { API_URL } from "../api";
import { getRefreshToken } from "../../utils/localstore/localstore.utils";

// user SIGN IN
export const signInApi = async (payload: any): Promise<any> => {
  const { data } = await $api.post("/auth/email/sign-in", payload);
  return data;
};

export const logoutApi = async () => {
  const refreshToken = getRefreshToken();
  const { status } = await $api.post("/auth/email/logout", { refreshToken });
  return status === 200;
};

export const refreshApi = async () => {
  const token = getRefreshToken();
  const { data } = await axios.post(
    `${API_URL}/auth/token/refresh`,
    { token },
    {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    }
  );
  return data;
};
