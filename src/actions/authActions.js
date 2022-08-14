import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFail = (payload) => {
  return {
    type: LOGIN_FAIL,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
