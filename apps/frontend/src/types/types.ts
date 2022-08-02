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

export interface PostRequestRoot {
    post: Post[]
}

export interface IToken {
    token: string | null
}

export interface IAction {
    type: string,
    payload: any
}

export interface IResponseError {
    message?: string
}

export interface IStatus {
    status: 'idle' | 'loading' | 'failed';
}
export interface IPostReducer extends IStatus {
    posts: Post[],

}

export interface IAuthReducer extends IStatus, IToken, IResponseError {

}

export interface ILoginParams {
    mail: string,
    password: string
}

export interface IResgisterParams {
    name: string,
    surname: string,
    mail: string,
    password: string
}
