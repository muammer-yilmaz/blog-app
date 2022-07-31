import { Box } from '@chakra-ui/react';
import React from 'react';

const loader = require('../../assets/loader.gif')

const Loader: React.FC = () => {

    return (
        <>
            <Box minH={'90vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <figure>
                    <img width={200} src={loader} alt='loader' />
                </figure>
            </Box>
        </>
    )
}

export default Loader