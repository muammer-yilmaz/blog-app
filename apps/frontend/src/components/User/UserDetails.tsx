import { Avatar, Box, Center, Container, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React from "react";

const UserDetails: React.FC = () => {

    return (
        <>
            <Box >
                <Stack spacing={4}>
                    <Box>
                        <Avatar size={'2xl'} name="Muammer Yılmaz"
                            src="https://avatars.githubusercontent.com/muammer-yilmaz" />
                    </Box>
                    <Container>
                        <Stack spacing={4} justify={'center'}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input type={'text'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Surname</FormLabel>
                                <Input type={'text'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Mail</FormLabel>
                                <Input type={'email'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Phone</FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input />
                            </FormControl>
                        </Stack>
                    </Container>
                </Stack>
            </Box>
        </>
    )
}

export default UserDetails;