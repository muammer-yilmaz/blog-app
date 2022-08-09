import PostModel from './post.model';
import Post from './post.interface';

class PostService {
    private post = PostModel;

    /**
     * Create a new post
     */
    public async create(post: Post): Promise<Post> {
        try {
            const data = await this.post.create({ ...post });
            return data;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }

    /**
     * Get one item from db by Id
     */
    public async getById(id: String) {
        try {
            const data = await this.post.findById(id);
            return data;
        } catch (error: any) {
            throw new Error('item get error : ' + error);
        }
    }

    /**
     * Get all items from db
     */
    public async getAll() {
        try {
            const data = await this.post.find({});
            data.forEach((el) => {
                el.body = el.body.slice(0, 60);
            })
            return data;
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