import { Document } from 'mongoose';

export default interface Post extends Document {
    title : String,
    image : String,
    body : String
}