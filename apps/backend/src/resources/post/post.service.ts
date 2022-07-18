import PostModel from './post.model';
import Post from './post.interface';

class PostService {
    private post = PostModel;

    /**
     * Create a new post
     */
    public async create(title: string, body: string ,image? : string ): Promise<Post> {
        try {
            const post = await PostModel.create({ title,body,image,  });
            return post;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }

    /**
     * Get one item from db by Id
     */
    public async getById(id : String) {
        try {
            const post = await this.post.findById(id);
            return post;
        } catch(error : any) {
            throw new Error('item get error : ' + error);
        }
    }
}

export default PostService;