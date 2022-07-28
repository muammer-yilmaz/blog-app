import { IToken, Post } from 'types/types';
import httpRequest from './fetcher';

// Auth

/**
 * 
 * @param mail 
 * @param password 
 * @returns token => string
 */
export const login = async (mail: string, password: string) => {
    return httpRequest<IToken>(
        {
            method: 'POST',
            url: '/users/login',
            data: { mail, password }
        }
    )

}

// Post 

export const getPosts = async () => {
    const data = await httpRequest<Post[]>(
        {
            method: 'GET',
            url: '/posts',
        }
    )
    return data
}

export const getSinglePost = async (id: string) => {
    return await httpRequest<Post>(
        {
            method: 'GET',
            url: `/posts/${id}`
        }
    )
}




