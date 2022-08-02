import Welcome from "components/Home/Welcome";
import PostList from "components/Post/PostList";
import Loader from "components/Shared/Loader";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchPostsThunk, selectPosts } from "redux/reducers/postReducer";


const HomePage: React.FC = () => {


    return (
        <>
            <Welcome />
        </>
    )
}

export default HomePage