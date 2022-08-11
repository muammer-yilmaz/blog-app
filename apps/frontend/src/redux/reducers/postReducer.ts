import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Create_Post, Post_Fetch_All, Post_Fetch_Single } from "constants/actionTypes";
import { createPost, getPosts, getSinglePost } from "services/api";
import { Id, IPostParams, IPostReducer } from "types";
import { RootState } from "redux/store";
import jwt_decode from 'jwt-decode';
import toast from "react-hot-toast";

const initialState: IPostReducer = {
    posts: [],
    status: 'idle',
    message: '',
    selectedId: undefined,
    singlePost: undefined
}

export const fetchPostsThunk = createAsyncThunk(
    Post_Fetch_All,
    async () => {
        const response = await getPosts();
        return response;
    }
)

export const fetchSinglePostThunk = createAsyncThunk(
    Post_Fetch_Single,
    async (payload: string, { rejectWithValue }) => {
        try {
            const response = await getSinglePost(payload);
            return response.post;
        } catch (error) {
            return rejectWithValue(error);
        }
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
type actionType = {
    id: string
}

const postReducer = createSlice({
    name: "post",
    initialState,
    reducers: {
        setId: (state: IPostReducer, action: PayloadAction<actionType>) => {
            state.selectedId = action.payload.id
        }

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
        ).addCase(fetchSinglePostThunk.pending, (state, action) => {
            state.status = 'loading';
        }
        ).addCase(fetchSinglePostThunk.fulfilled, (state, action) => {
            state.status = 'success';
            state.singlePost = action.payload;
        }
        ).addCase(fetchSinglePostThunk.rejected, (state, action) => {
            state.status = 'failed';
            state.message = "" + action.payload;
        }
        )
    }
})

export const selectPosts = (state: RootState) => state.posts

//export const { setId } = postReducer.actions;

export default postReducer.reducer;