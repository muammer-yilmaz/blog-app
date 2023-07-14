import IPost from 'Types/Post/Post'
import IUser from 'Types/User/User'

export interface Id {
    _id: string
}

export interface User extends IUser, Id {
    __v: number;
}

export interface Post extends IPost, Id {
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface PostRequestRoot {
    post: Post[]
}

export interface SinglePostRequestRoot {
    post: Post;
}

export interface UserRequestRoot {
    user: User
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
    status: 'idle' | 'loading' | 'failed' | 'success';
}

export interface IReducer extends IStatus, IResponseError {

}

export interface IPostReducer extends IReducer {
    posts: Post[],
    selectedId?: string,
    singlePost?: Post
}

export interface IAuthReducer extends IToken, IReducer {

}

export interface IUserReducer extends IReducer {
    user: Partial<User>
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

export interface IPostParams extends IPost {

}

