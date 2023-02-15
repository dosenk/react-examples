import { RootState } from "../store";
import { IUserState } from "./user.slice";

// eslint-disable-next-line import/prefer-default-export
export const userSelector = (state: RootState): IUserState => state.user;
