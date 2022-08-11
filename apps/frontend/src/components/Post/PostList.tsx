import { Box, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectPosts } from "redux/reducers/postReducer";
import { Post } from "types";
import PostItem from "./PostItem";

interface IProps {
    items: Post[]
}

const PostList: React.FC<IProps> = ({ items }) => {

    const [posts, setPosts] = useState<Post[]>([]);

    const selector = useAppSelector(selectPosts)

    useEffect(() => {
        setPosts(selector.posts)
    }, [])

    console.log('items :>> ', items);
    return (
        <>

            <Box >
                {/* <Stack border={'2px green solid'} spacing={5} direction={"row"} justify={"center"}> */}
                <Center flexWrap="wrap">
                    {

                        posts.map(el => {
                            return (
                                <PostItem  {...el} key={el._id} />
                            )
                        })
                    }
                </Center>
                {/* </Stack> */}
            </Box>
        </>
    )
}

export default PostList;