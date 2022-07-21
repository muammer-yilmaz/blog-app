import { Document } from 'mongoose';
import IPost from 'Types/Post/Post'

export default interface Post extends IPost, Document {

}