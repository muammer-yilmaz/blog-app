import { PayloadAction } from "@reduxjs/toolkit";
import { FETCH_POSTS_SUCCESS } from "constants/actionTypes";
import { FetchPostsActionType } from "redux/actions/postActions";
import { IAction, IPostReducer } from "types/types";

const initialState: IPostReducer = {
    posts: [],
    isLoading: false
}

const postReducer = (state = initialState, action: PayloadAction) => {

    switch (action.type) {

        case FETCH_POSTS_SUCCESS: return {
            ...state, posts: action.payload
        }

    }

}

export default postReducer;