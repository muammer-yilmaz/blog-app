import { IAuthReducer, ILoginParams } from "types/types";
import { LOGIN_SUCCESS } from "constants/actionTypes";
import { login } from "services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";


const initialState: IAuthReducer = {
    token: null,
    status: "idle"
}

const loginThunk = createAsyncThunk(
    LOGIN_SUCCESS,
    async (payload: ILoginParams) => {
        const response = await login(payload.mail, payload.password);
        return response;
    }
)


const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state) => {
            state.status = 'loading'
        }
        ).addCase(loginThunk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.token = action.payload.token;
        }
        ).addCase(loginThunk.rejected, (state) => {
            state.status = 'failed'
            state.token = null
        })
    }
})

export const selectAuth = (state: RootState) => state.auth

export default authReducer.reducer;