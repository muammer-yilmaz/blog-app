
interface IUser {

    name: String,
    surname: String,
    mail: String,
    password: String,
    phone?: String,
    image?: String,
    createdDate?: Date,

}

export default IUser;