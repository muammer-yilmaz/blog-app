import { LOGIN_SUCCESS } from "../../constants/actionTypes";

export const loginStart = (mail: string, password: string) => {

    return ({
        type: LOGIN_SUCCESS,
        payload: {
            mail: mail,
            password: password
        }
    }
    ) as const;
}


export type AuthActionType = | ReturnType<typeof loginStart>