import PostList from "components/Post/PostList";
import Loader from "components/Shared/Loader";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchPostsThunk, selectPosts } from "redux/reducers/postReducer";
import { getPosts } from "services/api";
import { Post } from "types/types";



const HomePage: React.FC = () => {

    const [items, setItems] = useState<Post[]>([]);
    const dispatch = useAppDispatch();
    const selector = useAppSelector(selectPosts);


    useEffect(() => {
        dispatch(fetchPostsThunk())
        setItems(selector.posts)

    }, [])


    return (
        <>
            {selector.status === 'loading' ? <Loader />
                : <PostList {...{ items }} />

            }
        </>
    )
}

export default HomePage