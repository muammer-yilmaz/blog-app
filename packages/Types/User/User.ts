
interface IUser {

    name: string,
    surname: string,
    mail: string,
    password: string,
    phone?: string,
    image?: string,
    createdDate?: Date,

}

export default IUser;