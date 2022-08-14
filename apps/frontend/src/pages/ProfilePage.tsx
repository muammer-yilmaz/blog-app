import { Box, Stack } from '@chakra-ui/react';
import ProfileNav from 'components/User/ProfileNav';
import UserDetails from 'components/User/UserDetails';
import React from 'react';

const ProfilePage: React.FC = () => {

    return (
        <>
            <Stack spacing={8}>
                <ProfileNav />
                <UserDetails />
            </Stack>
        </>
    )
}

export default ProfilePage;