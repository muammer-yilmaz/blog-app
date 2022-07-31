import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FETCH_POSTS_SUCCESS } from "constants/actionTypes";
import { getPosts } from "services/api";
import { IPostReducer } from "types/types";
import { RootState } from "redux/store";

const initialState: IPostReducer = {
    posts: [],
    status: 'idle'
}

export const fetchPostsThunk = createAsyncThunk(
    FETCH_POSTS_SUCCESS,
    async () => {
        const response = await getPosts();
        return response;
    }
)

const postReducer = createSlice({
    name: "post",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(fetchPostsThunk.pending, (state) => {
            state.status = 'loading'
        }
        ).addCase(fetchPostsThunk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.posts = action.payload
        }
        ).addCase(fetchPostsThunk.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export const selectPosts = (state: RootState) => state.posts

export default postReducer.reducer;