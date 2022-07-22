import PostModel from './post.model';
import Post from './post.interface';

class PostService {
    private post = PostModel;

    /**
     * Create a new post
     */
    public async create(title: string, body: string, image?: string): Promise<Post> {
        try {
            const post = await this.post.create({ title, body, image, });
            return post;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }

    /**
     * Get one item from db by Id
     */
    public async getById(id: String) {
        try {
            const post = await this.post.findById(id);
            return post;
        } catch (error: any) {
            throw new Error('item get error : ' + error);
        }
    }

    /**
     * Get all items from db
     */
    public async getAll() {
        try {
            const posts = await this.post.find();
            return posts;
        } catch (error: any) {
            throw new Error('item get error : ' + error);
        }
    }

    /**
     * Delete one item from db
     */

    public async deleteItem(id: String) {

        try {
            const post = await this.post.findOneAndDelete({
                _id: id
            })
            console.log(post);

            if (post === null)
                throw new Error(`item doesn't exist`);
            return post;
        } catch (error: any) {
            throw new Error('item delete error : ' + error)
        }
    }

}

export default PostService;