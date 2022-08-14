import { FETCH_COINS_SUCCESS, FETCH_COINS_FAIL } from "./types";

export const fetchCoinsSuccess = (coins) => {
    return {
        type:FETCH_COINS_SUCCESS,
        payload: coins
    }
};

export const fetchCoinsFail = (errorMessage) => {
    return {
        type:FETCH_COINS_FAIL,
        payload: errorMessage
    }
};