import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/types";

const initState = {
  isAuthenticated: false,
  token: "",
  role: null,
  userName: null,
  errorMessage: "",
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('paraticaToken', payload.token)
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
        userName: payload.userName,
        role: payload.role,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: "Login failed, please check your username and password",
      };
    case LOGOUT:
      localStorage.removeItem('paraticaToken')
      return {
        ...initState,
      };
    default:
      return state;
  }
};
