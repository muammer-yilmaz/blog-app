import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    FormErrorMessage,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerThunk, selectAuth } from 'redux/reducers/authReducer';
import { IResgisterParams } from 'types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Loader from 'components/Shared/Loader';

const Register: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const selector = useAppSelector(selectAuth)
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<IResgisterParams>();

    const onSubmit = (data: IResgisterParams) => {
        try {
            dispatch(registerThunk(data))
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
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Register
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isInvalid={!!errors.name}>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" {...register('name', {
                                            required: 'This is required',
                                        })} />
                                        <FormErrorMessage>
                                            {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName" isInvalid={!!errors.surname}>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" {...register('surname', {
                                            required: 'This is required',
                                        })} />
                                        <FormErrorMessage>
                                            {errors.surname && errors.surname.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isInvalid={!!errors.mail}>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" {...register('mail', {
                                    required: 'This is required',
                                })} />
                                <FormErrorMessage>
                                    {errors.mail && errors.mail.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl id="password" isInvalid={!!errors.password}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} {...register('password', {
                                        required: 'This is required',
                                        minLength: { value: 6, message: 'Minimum length should be 6' },
                                    })} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors.password && errors.password.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    type='submit'
                                    spinner={<Loader {...{ width: 50 }} />}
                                    isLoading={selector.status === 'loading'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user? <Link as={ReactLink} to="/login" color={'blue.400'} >Login</Link>
                                </Text>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default Register;