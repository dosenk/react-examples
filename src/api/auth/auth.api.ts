import axios, { AxiosRequestConfig } from "axios";
import $api, { API_URL } from "../api";
import { getRefreshToken } from "../../utils/localstore/localstore.utils";

// user SIGN IN
export const signInApi = async (
  payload: ISignInPayload,
  config?: AxiosRequestConfig
): Promise<IUserResponse> => {
  const { data } = await $api.post("/auth/login", payload, config);
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

export interface ISignInPayload {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface IUserResponse extends IUser {
  token: string;
}
