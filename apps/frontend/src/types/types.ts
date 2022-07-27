import IPost from 'Types/Post/Post'
import IUser from 'Types/User/User'


export interface User extends IUser {
    _id: string
}

export interface Post extends IPost {
    _id: string
}

export interface IToken {
    token: string
}