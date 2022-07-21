import React from "react";
import IPost from 'Types/Post/Post';
import { Box, Heading, Image } from '@chakra-ui/react';


const fallbackImage = require("../../assets/no-image.png")


const PostItem: React.FC<IPost> = (props: IPost) => {
    return (
        <>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    pos={'relative'}
                    height={'200px'}
                >
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={props.image === undefined ? fallbackImage : props.image}
                        fallbackSrc={fallbackImage}
                    />
                </Box>
                <Box pt={12} >
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} textAlign="center">
                        {props.title}
                    </Heading>
                </Box>

            </Box>

        </>
    )
}


export default PostItem