import { Schema , model } from "mongoose";
import Post from './post.interface';


const PostModel = new Schema( {
    title : {
        type : String,
        required : true,
    },
    image : {
        type: String,
        required: false,
    },
    body: {
        type: String,
        required: true,
    },
});

export default model<Post>('Post', PostModel);