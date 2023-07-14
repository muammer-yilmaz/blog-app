import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User_Fetch_Single } from "constants/actionTypes";
import { RootState } from "redux/store";
import { getUser } from "services/api";
import { IUserReducer } from "types";
import jwt_decode from 'jwt-decode'

const initialState: IUserReducer = {
    status: 'idle',
    message: "",
    user: {}
}

export const fetchUserThunk = createAsyncThunk(
    User_Fetch_Single,
    async (_, { rejectWithValue }) => {
        try {
            const decoded: any = jwt_decode("" + localStorage.getItem("token"));
            const response = await getUser(decoded.id);
            console.log('response', response)
            return response.user
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)



const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserThunk.pending, (state) => {
            state.status = "loading";
        }
        ).addCase(fetchUserThunk.fulfilled, (state, action) => {
            state.status = "success";
            state.user = action.payload;

        }
        ).addCase(fetchUserThunk.rejected, (state) => {
            state.status = "failed";
        }
        )
    }
})


export const selectUser = (state: RootState) => state.user;

export default userReducer.reducer;