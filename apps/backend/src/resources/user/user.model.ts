import { model, Schema } from "mongoose";
import User from "./user.interface";
import bcrypt from 'bcrypt';

const UserModel = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        required: true
    }
});

// convert e mail to lowercase
UserModel.pre<User>('save', async function (next) {
    if (!this.isModified('password') && !this.isModified('mail')) {
        return next();
    }
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    this.mail = this.mail.toLowerCase();

    next();
});


export default model<User>("User", UserModel)