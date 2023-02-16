import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ISignInPayload,
  logoutApi,
  refreshApi,
  signInApi,
} from "../../api/auth/auth.api";
import { notify } from "../../utils/notification/toast";

export const signIn = createAsyncThunk(
  "user/signIn",
  async (data: ISignInPayload, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return await signInApi(data);
    } catch (e: any) {
      return rejectWithValue(
        "Login failed. Your email or password is incorrect."
      );
    }
  }
);

export const refresh = createAsyncThunk(
  "user/refresh",
  async (_, { rejectWithValue }) => {
    try {
      return await refreshApi();
    } catch (e: any) {
      const msg = "Your session has timed out. Please login again.";
      notify("warn", msg);
      return rejectWithValue(msg);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await logoutApi();
    } catch (e: any) {
      const msg = "Something went wrong. Please try again.";
      notify("warn", msg);
      return rejectWithValue(msg);
    }
  }
);
