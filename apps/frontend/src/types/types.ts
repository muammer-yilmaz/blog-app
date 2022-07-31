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

export interface IStatus {
    status: 'idle' | 'loading' | 'failed';
}
export interface IPostReducer extends IStatus {
    posts: Post[],

}

export interface IAuthReducer extends IStatus, IToken {

}

export interface ILoginParams {
    mail: string,
    password: string
}

