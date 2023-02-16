import { ActionReducerMapBuilder as AcBuilder } from "@reduxjs/toolkit";
import { NoInfer } from "@reduxjs/toolkit/dist/tsHelpers";
import { logout, refresh, signIn } from "./user.actions";
import { IUserState } from "./user.slice";
import {
  removeRefreshToken,
  setRefreshToken,
} from "../../utils/localstore/localstore.utils";

// const signInBuilder = (builder: AcBuilder<NoInfer<any>>) => {
//   builder
//     .addCase(signIn.pending, (state) => {
//       state.authError = false;
//       state.loading = true;
//     })
//     .addCase(signIn.fulfilled, (state, { payload }) => {
//       console.log(payload);
//       // const { refreshToken, user } = payload;
//       // setRefreshToken(refreshToken);
//       // state.isAuth = !!refreshToken;
//       // state.user = user;
//       // state.loading = false;
//     })
//     .addCase(signIn.rejected, (state) => {
//       state.authError = true;
//       state.loading = false;
//     });
// };
//
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

// export default (builder: AcBuilder<NoInfer<IUserState>>) => {
//   signInBuilder(builder);
//   refreshBuilder(builder);
//   logoutBuilder(builder);
// };
