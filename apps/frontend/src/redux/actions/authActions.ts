import { GET_USER_START, GET_USER_SUCCESS, LOGIN_START, LOGIN_SUCCESS } from "../../constants/actionTypes";
import { User } from "../../types/types";


export const loginStart = (email: string, password: string) => ({
    type: LOGIN_START,
    payload: {
        email,
        password
    }
} as const);

export const loginSuccess = (auth: User) => ({
    type: LOGIN_SUCCESS,
    payload: auth
} as const);
