import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Create_Post, Post_Fetch_All } from "constants/actionTypes";
import { createPost, getPosts } from "services/api";
import { IPostParams, IPostReducer } from "types";
import { RootState } from "redux/store";
import jwt_decode from 'jwt-decode';
import toast from "react-hot-toast";

const initialState: IPostReducer = {
    posts: [],
    status: 'idle',
    message: ''
}

export const fetchPostsThunk = createAsyncThunk(
    Post_Fetch_All,
    async () => {
        const response = await getPosts();
        return response;
    }
)

export const createPostThunk = createAsyncThunk(
    Create_Post,
    async (payload: IPostParams, { rejectWithValue }) => {
        try {
            const decoded: any = jwt_decode("" + localStorage.getItem("token"));
            payload.author = decoded.id;
            const response = await createPost(payload);
            return response
        } catch (error: any) {
            return rejectWithValue(error)
        }
    }
)

const postReducer = createSlice({
    name: "post",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(fetchPostsThunk.pending, (state) => {
            state.status = 'loading';
        }
        ).addCase(fetchPostsThunk.fulfilled, (state, action) => {
            state.status = 'success';
            state.posts = action.payload;
            state.status = 'idle'
        }
        ).addCase(fetchPostsThunk.rejected, (state) => {
            state.status = 'failed';
        }
        ).addCase(createPostThunk.pending, (state) => {
            state.status = 'loading';
        }
        ).addCase(createPostThunk.fulfilled, (state) => {
            state.status = 'success';
            toast.success("Post successfully created");
            state.status = 'idle';
        }
        ).addCase(createPostThunk.rejected, (state, action) => {
            state.status = 'failed';
            state.message = "" + action.payload;
        }
        )
    }
})

export const selectPosts = (state: RootState) => state.posts

export default postReducer.reducer;