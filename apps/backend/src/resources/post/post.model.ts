import { Schema, model } from "mongoose";
import Post from './post.interface';


const PostModel = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
}, { timestamps: true });

PostModel.virtual('truncated_text').get(function () {
    return this.body.substring(0, 150);
});

export default model<Post>('Post', PostModel);