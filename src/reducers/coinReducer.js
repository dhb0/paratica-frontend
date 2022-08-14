import { FETCH_COINS_SUCCESS, FETCH_COINS_FAIL } from "../actions/types";

const initState = {
  items: [],
  loading: true,
  errorMessage: "",
};

export const coinReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_COINS_SUCCESS:
      return {
        ...state,
        items: payload,
        loading: false
      };
    case FETCH_COINS_FAIL:
      return {
        ...state,
        loading:false,
        errorMessage: payload
      };
    default:
      return state;
  }
};
