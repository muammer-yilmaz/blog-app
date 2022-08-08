import React, { useEffect } from 'react';
import {
    Box, Text, chakra, Container, Flex, FormControl, FormLabel, Icon, Input, Stack, Textarea, VisuallyHidden, Button, FormErrorMessage
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { IPostParams } from 'types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { createPostThunk, selectPosts } from 'redux/reducers/postReducer';
import { useNavigate } from 'react-router-dom';

const AddPost: React.FC = () => {

    const dispatch = useAppDispatch();
    const selector = useAppSelector(selectPosts)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<IPostParams>();

    const onSubmit = (data: IPostParams) => {
        try {
            dispatch(createPostThunk(data))
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        if (selector.status === 'success')
            navigate('/posts');
    }, [navigate, selector.status])

    return (
        <>
            <Container p={12} maxW={'container.md'}>
                <Box p={8} boxShadow={'2xl'}>
                    <Stack p={4} spacing={4}>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <FormControl isRequired isInvalid={!!errors.title}>
                                <FormLabel >
                                    Title
                                </FormLabel>
                                <Input type='text' rounded={'md'} {...register('title', {
                                    required: "this is required"
                                })} />
                                <FormErrorMessage>
                                    {errors.title && errors.title.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={!!errors.body}>
                                <FormLabel>
                                    Blog Content
                                </FormLabel>
                                <Textarea rows={3} rounded={'md'} {...register('body', {
                                    required: "this is required"
                                })} />
                                <FormErrorMessage>
                                    {errors.body && errors.body.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!errors.image}>
                                <FormLabel>
                                    Link
                                </FormLabel>
                                <Input {...register('image', {
                                    required: "this is required"
                                })} />
                                <FormErrorMessage>
                                    {errors.image && errors.image.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel>
                                    Cover photo
                                </FormLabel>
                                <Flex
                                    justify="center"
                                    px={6}
                                    borderWidth={2}
                                    borderStyle="dashed"
                                    rounded="md"
                                >
                                    <Stack spacing={1} textAlign="center">
                                        <Icon
                                            mx="auto"
                                            boxSize={12}
                                            color="gray.400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </Icon>
                                        <Flex
                                            fontSize="sm"
                                            alignItems="baseline"
                                        >
                                            <chakra.label
                                                htmlFor="file-upload"
                                                cursor="pointer"
                                                rounded="md"
                                                fontSize="md"
                                                pos="relative"
                                                _hover={{
                                                    color: "teal.400",
                                                }}
                                            >
                                                <span>Upload a file</span>
                                                <VisuallyHidden>
                                                    <Input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                    />
                                                </VisuallyHidden>
                                            </chakra.label>
                                            <Text pl={2} >or drag and drop</Text>
                                        </Flex>
                                        <Text
                                            fontSize="xs"
                                        >
                                            PNG, JPG up to 10MB
                                        </Text>
                                    </Stack>
                                </Flex>
                            </FormControl>
                            <Flex justify={'flex-end'}>
                                <Button rounded={'md'} type='submit'>
                                    Save
                                </Button>
                            </Flex>
                        </form>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default AddPost;
