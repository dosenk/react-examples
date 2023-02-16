import { ActionReducerMapBuilder as AcBuilder } from "@reduxjs/toolkit";
import { NoInfer } from "@reduxjs/toolkit/dist/tsHelpers";
import { signIn } from "./user.actions";
import { IUserState } from "./user.slice";
import { setAuthToken } from "../../utils/localstore/localstore.utils";

const signInBuilder = (builder: AcBuilder<NoInfer<IUserState>>) => {
  builder
    .addCase(signIn.pending, (state) => {
      state.loading = true;
    })
    .addCase(signIn.fulfilled, (state, { payload }) => {
      const { token, ...user } = payload;
      state.error = "";
      setAuthToken(token);
      state.isAuth = !!token;
      state.user = user;
      state.loading = false;
    })
    .addCase(signIn.rejected, (state, { payload }) => {
      state.loading = false;
      if (typeof payload === "string") state.error = payload;
    });
};

// const refreshBuilder = (builder: AcBuilder<NoInfer<IUserState>>) => {
//   builder
//     .addCase(refresh.pending, (state) => {
//       state.loading = true;
//     })
//     .addCase(refresh.fulfilled, (state, { payload }) => {
//       const { refreshToken, user } = payload;
//       setRefreshToken(refreshToken);
//       state.isAuth = !!refreshToken;
//       state.user = user;
//       state.loading = false;
//     })
//     .addCase(refresh.rejected, (state) => {
//       removeRefreshToken();
//       state.loading = false;
//     });
// };
//
// const logoutBuilder = (builder: AcBuilder<NoInfer<IUserState>>) => {
//   builder
//     .addCase(logout.pending, (state) => {
//       state.loading = true;
//     })
//     .addCase(logout.fulfilled, (state) => {
//       removeRefreshToken();
//       state.isAuth = false;
//       state.user = undefined;
//       state.loading = false;
//     })
//     .addCase(logout.rejected, (state) => {
//       state.loading = false;
//     });
// };

export default (builder: AcBuilder<NoInfer<IUserState>>) => {
  signInBuilder(builder);
  // refreshBuilder(builder);
  // logoutBuilder(builder);
};
