import React from 'react';
import PostDetail from 'components/Post/PostDetail'
import { useAppSelector } from 'redux/hooks';
import { selectPosts } from 'redux/reducers/postReducer';
import Loader from 'components/Shared/Loader';

const PostDetailPage: React.FC = () => {
    const selector = useAppSelector(selectPosts);
    return (
        <>
            {selector.status === 'loading' ? <Loader {...{ width: 100 }} />
                : <PostDetail />}
        </>
    )

}

export default PostDetailPage;