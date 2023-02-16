import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import extraReducers from "./user.builders";
import { removeRefreshToken } from "../../utils/localstore/localstore.utils";
import { IUser } from "../../api/auth/auth.api";

export const initialState: IUserState = {
  // user: null,
  loading: false,
  isAuth: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
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
  user?: IUser;
  loading: boolean;
  isAuth: boolean;
  error: string;
}
