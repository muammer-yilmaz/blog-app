import { Document } from "mongoose";
import IUser from 'Types/User/User';

export default interface User extends IUser, Document {

}

