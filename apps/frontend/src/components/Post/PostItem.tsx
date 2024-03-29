import {
    Box,
    Center,
    Heading,
    Text,
    Image,
    Stack,
    Avatar,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import React from 'react';
import { Post } from 'types';
import { Link as RouterLink } from 'react-router-dom';
import fallbackImage from "../../assets/no-image.png";

const PostItem: React.FC<Post> = (props) => {

    return (
        <>
            <Center py={6} px={3} >
                <Box
                    w={'360px'}
                    h={'420px'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}
                >
                    <Box
                        h={'180px'}
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
                    <Stack >
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            Blog
                        </Text>
                        <Link as={RouterLink} to={{ pathname: `../${props._id}` }}>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={'2xl'}
                                fontFamily={'body'}>
                                {props.title}
                            </Heading>
                        </Link>
                        <Text color={'gray.500'} >
                            {props.body}
                        </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}  >
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