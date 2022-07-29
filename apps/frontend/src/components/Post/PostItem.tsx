import {
    Box,
    Center,
    Heading,
    Text,
    Image,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Post } from 'types/types';

const fallbackImage = require("../../assets/no-image.png")



const PostItem: React.FC<Post> = (props) => {


    return (
        <>
            <Center py={3}>
                <Box
                    maxW={'445px'}
                    minW={'210px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Box
                        h={'210px'}
                        bg={'gray.100'}
                        pos={'relative'}
                        display={'flex'}
                    >
                        <Image
                            src={props.image === undefined ? fallbackImage : props.image}
                            objectFit='cover'
                            width={'100%'}
                            fallbackSrc={fallbackImage}
                        />


                    </Box>
                    <Stack>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            Blog
                        </Text>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {props.title}
                        </Heading>
                        <Text color={'gray.500'}>
                            {props.body}
                        </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                        <Avatar
                            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text fontWeight={600}>Achim Rolle</Text>
                            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Center>
        </>
    );
}

export default PostItem;