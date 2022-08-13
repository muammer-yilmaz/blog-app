import { Box, Center, Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";

const ProfileNav: React.FC = () => {

    return (
        <>
            <Box p={4}>
                <Flex align={'center'} justify={'center'}>
                    <HStack spacing={8} align={'center'}>
                        <Link>Deneme</Link>
                        <Link>Deneme</Link>
                        <Link>Deneme</Link>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}

export default ProfileNav;