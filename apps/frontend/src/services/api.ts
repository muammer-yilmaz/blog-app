import { IToken } from 'types/types';
import httpRequest from './fetcher';

export const login = async (mail: string, password: string) => {
    return httpRequest<IToken>(
        {
            method: 'POST',
            url: '/users/login',
            data: { mail, password }
        }
    )

}



