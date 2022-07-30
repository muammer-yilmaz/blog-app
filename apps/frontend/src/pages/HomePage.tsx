import PostList from "components/Post/PostList";
import Loader from "components/Shared/Loader";
import React, { useEffect, useState } from "react";
import { getPosts } from "services/api";
import { Post } from "types/types";



const HomePage: React.FC = () => {

    const [items, setItems] = useState<Post[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            const data: any = await getPosts();
            setItems(data.post)

        }
        fetchData()


    }, [])

    console.log("items", items);


    return (
        <>
            <PostList {...{ items }} />
            {/* <Loader /> */}
        </>
    )
}

export default HomePage