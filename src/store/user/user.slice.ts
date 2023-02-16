import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import extraReducers from "./user.builders";
import {
  getRefreshToken,
  removeRefreshToken,
} from "../../utils/localstore/localstore.utils";
import { ActionReducerMapBuilder as AcBuilder } from "@reduxjs/toolkit/dist/mapBuilders";
import { NoInfer } from "@reduxjs/toolkit/dist/tsHelpers";
import { signIn } from "./user.actions";

const isHaveRefreshToken = !!getRefreshToken();
export const initialState: IUserState = {
  // user: null,
  loading: isHaveRefreshToken,
  isAuth: false,
  authError: false,
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
    logout: (state) => {
      removeRefreshToken();
      state.isAuth = false;
    },
  },
  extraReducers: (builder: AcBuilder<NoInfer<any>>) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.authError = false;
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        console.log(payload);
        // const { refreshToken, user } = payload;
        // setRefreshToken(refreshToken);
        // state.isAuth = !!refreshToken;
        // state.user = user;
        // state.loading = false;
      })
      .addCase(signIn.rejected, (state) => {
        state.authError = true;
        state.loading = false;
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

export interface IUserState {
  user?: any;
  loading: boolean;
  isAuth: boolean;
  authError: boolean;
}
