import { model, Schema } from "mongoose";
import User from "./user.interface";

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
        required: true
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

export default model<User>("User", UserModel)