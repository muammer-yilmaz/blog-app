import { Box } from '@chakra-ui/react';
import React from 'react';

import loader from '../../assets/loader.gif';

interface IProps {
    // height: string | number | undefined,
    width: string | number | undefined
}

const Loader: React.FC<IProps> = (props) => {

    return (
        <>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <figure>
                    <img width={props.width} src={loader} alt='loader' />
                </figure>
            </Box>
        </>
    )
}

export default Loader