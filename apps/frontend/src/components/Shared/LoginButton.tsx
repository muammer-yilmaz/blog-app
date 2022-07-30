import { Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

const LoginButton: React.FC = () => {

    return (
        <>
            <Button leftIcon={<Icon as={FiLogIn} />}>
                Login
            </Button>
        </>
    )
}

export default LoginButton;