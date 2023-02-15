// export const getAuthToken = () => {
//   return localStorage.getItem("authToken");
// };
//
// export const setAuthToken = (authToken: string) => {
//   return localStorage.setItem("authToken", authToken);
// };
//
export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const setRefreshToken = (refreshToken: string) => {
  return localStorage.setItem("refreshToken", refreshToken);
};

export const removeRefreshToken = () => {
  return localStorage.removeItem("refreshToken");
};

// export const removeAuthToken = () => {
//   return localStorage.removeItem("authToken");
// };

export const setRememberMe = (val: 0 | 1) =>
  localStorage.setItem("rememberMe", `${val}`);
export const getRememberMe = () => localStorage.getItem("rememberMe");
