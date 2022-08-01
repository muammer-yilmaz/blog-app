import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormErrorMessage,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom'
import { ILoginParams } from 'types/types';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { loginThunk, selectAuth } from 'redux/reducers/authReducer';
import Loader from 'components/Shared/Loader';


const Login: React.FC = () => {

    const [input, setInput] = useState<ILoginParams>();

    const dispatch = useAppDispatch();
    const selector = useAppSelector(selectAuth)

    const { register, control, handleSubmit, formState: { errors } } = useForm<ILoginParams>();

    const onSubmit = (data: ILoginParams) => {
        try {
            dispatch(loginThunk(data))
        } catch (error: any) {
            console.log('error :>> ', error);
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <Stack mb={3}>
                                <FormControl id="email" isInvalid={errors.mail !== undefined} >
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email"
                                        {...register('mail', {
                                            required: 'This is required',

                                        })} />
                                    <FormErrorMessage>
                                        {errors.mail && errors.mail.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl id="password" isInvalid={errors.password !== undefined}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" {...register('password', {
                                        required: 'This is required',
                                        minLength: { value: 6, message: 'Minimum length should be 6' },
                                    })} />
                                    <FormErrorMessage>
                                        {errors.password && errors.password.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </Stack>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    type='submit'
                                    display={'flex'}
                                    spinner={<Loader {...{ width: 50 }} />}
                                    isLoading={selector.status === 'loading'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Login
                                </Button>
                            </Stack>
                        </form>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Don't have an account? <Link as={ReactLink} to="/register" color={'blue.400'} >Register</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack >
        </Flex >
    );
}

export default Login;