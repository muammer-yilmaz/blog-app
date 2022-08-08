import { IPostParams, IResgisterParams, IToken, Post, PostRequestRoot, User } from 'types';
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

export const register = async (user: IResgisterParams) => {
    return httpRequest<User>(
        {
            method: 'POST',
            url: '/users/register',
            data: user
        }
    )
}

// Post 

export const getPosts = async () => {
    const { post } = await httpRequest<PostRequestRoot>(
        {
            method: 'GET',
            url: '/posts',
        }
    )
    return post
}

export const getSinglePost = async (id: string) => {
    return await httpRequest<Post>(
        {
            method: 'GET',
            url: `/posts/${id}`
        }
    )
}

export const createPost = async (post: IPostParams) => {
    return await httpRequest<Post>(
        {
            method: 'POST',
            url: '/posts/create',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: post
        }
    )
}




