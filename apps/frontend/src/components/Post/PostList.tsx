import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import IPost from "Types/Post/Post";
import PostItem from "./PostItem";

interface IProps {
    items: IPost[]
    display: String
}

const PostList: React.FC<IProps> = ({ items, display }) => {

    return (
        <>

            <Box >
                <Stack direction={"row"} flexWrap="wrap" justify={"center"}>
                    {
                        items.map(el => {
                            return (
                                <PostItem  {...el} />
                            )
                        })
                    }
                </Stack>
            </Box>
        </>
    )
}

export default PostList;