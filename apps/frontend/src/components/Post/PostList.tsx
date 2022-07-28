import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Post } from "types/types";
import PostItem from "./PostItem";

interface IProps {
    items: Post[]
}

const PostList: React.FC<IProps> = ({ items }) => {
    console.log(items)

    return (
        <>

            <Box >
                <Stack spacing={5} direction={"row"} flexWrap="wrap" justify={"center"}>
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