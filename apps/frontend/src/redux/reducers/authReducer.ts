import { IAuthReducer, ILoginParams, IResgisterParams } from "types/types";
import { Auth_Login, Auth_Register } from "constants/actionTypes";
import { login, register } from "services/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import toast from "react-hot-toast";

const initialState: IAuthReducer = {
    token: localStorage.getItem("token"),
    status: "idle",
    message: ""
}

export const loginThunk = createAsyncThunk(
    Auth_Login,
    async (payload: ILoginParams, { rejectWithValue }) => {
        try {
            const response = await login(payload.mail, payload.password);
            return response
        } catch (error: any) {
            return rejectWithValue(error)
        }
    }
)

export const registerThunk = createAsyncThunk(
    Auth_Register,
    async (payload: IResgisterParams, { rejectWithValue }) => {
        try {
            const response = await register(payload);
            return response
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state: IAuthReducer) => {
            localStorage.removeItem('token');
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state) => {
            state.status = 'loading';
        }
        ).addCase(loginThunk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.token = action.payload.token;
            localStorage.setItem("token", "" + action.payload.token);
        }
        ).addCase(loginThunk.rejected, (state, action) => {
            state.status = 'failed';
            state.token = null;
            state.message = "" + action.payload;
        }
        ).addCase(registerThunk.pending, (state) => {
            state.status = 'loading';
        }
        ).addCase(registerThunk.fulfilled, (state) => {
            state.status = 'idle';
            toast.success('User succesfully created');
        }
        ).addCase(registerThunk.rejected, (state, action) => {
            state.status = 'failed';
            state.message = "" + action.payload;
        })
    }
})

export const selectAuth = (state: RootState) => state.auth

export const { logout } = authReducer.actions

export default authReducer.reducer;