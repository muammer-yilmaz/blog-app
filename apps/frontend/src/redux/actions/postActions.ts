import * as types from "constants/actionTypes";
import { getPosts } from "services/api";
import { IAction } from "types/types";

export const fetchPosts = async () => {
    try {
        const data: any = await getPosts();
        return (
            {
                type: types.FETCH_POSTS_SUCCESS,
                payload: data
            }
        )
    } catch (error: any) {
        console.log("postAction ", error);

    }
}

export type FetchPostsActionType = | ReturnType<typeof fetchPosts>