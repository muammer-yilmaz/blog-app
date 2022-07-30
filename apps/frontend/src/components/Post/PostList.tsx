import { Box, Center, Stack } from "@chakra-ui/react";
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
                {/* <Stack border={'2px green solid'} spacing={5} direction={"row"} justify={"center"}> */}
                <Center flexWrap="wrap">
                    {

                        items.map(el => {
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