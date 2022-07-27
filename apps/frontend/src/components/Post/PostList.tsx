import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Post } from "types/types";
import PostItem from "./PostItem";

interface IProps {
    items: Post[]
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
                                <PostItem  {...el} key={el._id} />
                            )
                        })
                    }
                </Stack>
            </Box>
        </>
    )
}

export default PostList;