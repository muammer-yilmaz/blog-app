import { Router, Request, Response, NextFunction } from 'express';
import Controller from './post.controller';
import HttpException from '../../utils/exceptions/http.exception';
import validationMiddleware from '../../middlewares/validation.middleware';
import validate from './post.validation';
import PostService from './post.service';

class PostController implements Controller {
    public path = '/posts';
    public router = Router();
    private PostService = new PostService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {

        this.router.post(`${this.path}`,
            validationMiddleware(validate.create), this.create);

        this.router.get(`${this.path}/:id`, this.getById);

        this.router.get(this.path, this.getAll);

        this.router.delete(`${this.path}/:id`, this.deletePost);

    }

    private create = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {
            const { title, body, image } = req.body;
            console.log("alert");

            const post = await this.PostService.create(title, body, image);

            res.status(201).json({ post });
        } catch (error) {
            next(new HttpException(400, 'Cannot create post'));
        }
    };

    private getById = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {
            const id: String = req.params.id;

            const post = await this.PostService.getById(id);

            res.status(201).json({ post });
        } catch (error) {
            next(new HttpException(404, `Item doesn't exist`));
        }

    }

    private getAll = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {
            const post = await this.PostService.getAll();

            res.status(201).json({ post });
        } catch (error) {
            next(new HttpException(404, `Item doesn't exist`));
        }

    }

    private deletePost = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {

            const id = req.params.id

            const post = await this.PostService.deleteItem(id)

            res.status(204).json({ post });
        } catch (error) {
            next(new HttpException(404, `item doesn't exist`));
        }
    }

}


export default PostController;