import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, ButtonGroup, Center, Container, FormControl, FormLabel, Input, Stack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchUserThunk, selectUser } from "redux/reducers/userReducer";
import { User } from "types";

const UserDetails: React.FC = () => {

    const [user, setUser] = useState<Partial<User>>({})
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, formState: { errors } } = useForm<Partial<User>>();
    const dispatch = useAppDispatch();
    const selector = useAppSelector(selectUser)

    // const handleEdit = () => {
    //     onOpen
    // }
    const onSubmit = () => {
        dispatch(fetchUserThunk())
    }

    useEffect(() => {
        if (selector.status === 'success') {
            setUser(selector.user)
        }
    }, [])

    return (
        <>
            <Box p={8} >
                <Stack spacing={4}>
                    <Container>
                        <Box textAlign={'center'}>
                            <Avatar size={'2xl'} name="Muammer Yılmaz"
                                src="https://avatars.githubusercontent.com/muammer-yilmaz" />
                        </Box>
                        <Box>
                            <Stack spacing={6} justify={'center'}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormControl isDisabled={!isOpen}>
                                        <FormLabel>Name</FormLabel>
                                        <Input type={'text'} value={selector.user.name} />
                                    </FormControl>
                                    <FormControl isDisabled={!isOpen}>
                                        <FormLabel>Surname</FormLabel>
                                        <Input type={'text'} value={selector.user.surname} />
                                    </FormControl>
                                    <FormControl isDisabled={true}>
                                        <FormLabel>Mail</FormLabel>
                                        <Input type={'email'} value={selector.user.mail} />
                                    </FormControl>
                                    <FormControl isDisabled={!isOpen}>
                                        <FormLabel>Phone</FormLabel>
                                        <Input value={selector.user.phone} />
                                    </FormControl>
                                    {/* <FormControl isDisabled={!isOpen}>
                                        <FormLabel>Created Date</FormLabel>
                                        <Input value={selector.user.name} />
                                    </FormControl> */}
                                    <Box textAlign={'right'}>
                                        <ButtonGroup>
                                            <Button leftIcon={<EditIcon />}
                                                colorScheme={'blue'} onClick={isOpen ? onClose : onOpen}
                                            >
                                                Edit
                                            </Button>
                                            <Button leftIcon={<CheckIcon />}
                                                colorScheme={'teal'}
                                                type='submit'
                                            >
                                                Save
                                            </Button>
                                        </ButtonGroup>
                                    </Box>
                                </form>
                            </Stack>
                        </Box>
                    </Container>
                </Stack>
            </Box>
        </>
    )
}

export default UserDetails;