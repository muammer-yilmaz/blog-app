import { IToken, User } from "types/types";
import { AuthActionType } from "redux/actions/authActions";
import { LOGIN_SUCCESS } from "constants/actionTypes";
import { login } from "services/api";


const initialState: IToken = {
    token: "dad"
}


const authReducer = async (state = initialState, action: AuthActionType) => {

    switch (action.type) {
        case LOGIN_SUCCESS: {
            const { mail, password } = action.payload;
            const token = await login(mail, password);
            console.log("state ", state);
            localStorage.setItem("token", JSON.stringify(token));
            return ({
                ...state, token
            })

        }
    }

}

export default authReducer;