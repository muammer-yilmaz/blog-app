import React, { useEffect, useState } from 'react';
import { Post } from 'types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchPostsThunk, selectPosts } from 'redux/reducers/postReducer';
import PostList from 'components/Post/PostList';
import Loader from 'components/Shared/Loader';
import { Center } from '@chakra-ui/react';

const PostsPage: React.FC = () => {

    const [items, setItems] = useState<Post[]>([]);
    const dispatch = useAppDispatch();
    const selector = useAppSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPostsThunk())
        setItems(selector.posts)

    }, [])

    return (
        <>
            <Center minH={'90vh'}>

                {selector.status === 'loading' ? <Loader {...{ width: 100 }} />
                    : <PostList {...{ items }} />

                }
            </Center>
        </>
    )
}

export default PostsPage;

