import React from 'react';
import { Box, Center, Flex, FormControl, FormLabel, Input, Stack, Textarea, useColorModeValue } from '@chakra-ui/react';

const PostDetail: React.FC = () => {

    return (
        <>
            <Flex minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}
            >
                <Box>
                    <Stack>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Blog Text</FormLabel>
                            <Textarea />
                        </FormControl>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
}

export default PostDetail;