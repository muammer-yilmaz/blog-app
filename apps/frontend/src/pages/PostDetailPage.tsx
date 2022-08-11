import React, { useEffect } from 'react';
import PostDetail from 'components/Post/PostDetail'
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchSinglePostThunk, selectPosts } from 'redux/reducers/postReducer';
import Loader from 'components/Shared/Loader';
import { useParams } from 'react-router-dom';

const PostDetailPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector(selectPosts);
    const { id } = useParams()

    useEffect(() => {
        try {
            dispatch(fetchSinglePostThunk("" + id));
        } catch (error) {
            console.log('error :>> ', error);
        }
    }, [])

    return (
        <>
            {selector.status === 'loading' ? <Loader {...{ width: 100 }} />
                : <PostDetail />}
        </>
    )

}

export default PostDetailPage;