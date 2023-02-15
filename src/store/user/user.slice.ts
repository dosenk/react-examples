import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import extraReducers from "./user.builders";
import {
  getRefreshToken,
  removeRefreshToken,
} from "../../utils/localstore/localstore.utils";

const isHaveRefreshToken = !!getRefreshToken();
export const initialState: IUserState = {
  // user: null,
  loading: isHaveRefreshToken,
  isAuth: false,
  authError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    logout: (state) => {
      removeRefreshToken();
      state.isAuth = false;
    },
  },
  extraReducers,
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

export interface IUserState {
  user?: any;
  loading: boolean;
  isAuth: boolean;
  authError: boolean;
}
