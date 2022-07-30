import IPost from 'Types/Post/Post'
import IUser from 'Types/User/User'


export interface User extends IUser {
    _id: string

}

export interface Post extends IPost {
    _id: string
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface IToken {
    token: string
}

export interface IAction {
    type: string,
    payload: any
}

export interface IPostReducer {
    posts: Post[],
    isLoading: boolean
}

