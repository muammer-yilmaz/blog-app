import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../utils/interfaces/controller.interface';
import HttpException from '../../utils/exceptions/http.exception';
import validationMiddleware from '../../middlewares/validation.middleware';
import PostService from './post.service';
import postValidation from './post.validation';
import authorizeMiddleware from '../../middlewares/authorize.middleware';


class PostController implements Controller {
    public path = '/posts';
    public router = Router();
    private PostService = new PostService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {

        this.router.post(`${this.path}/create`,
            authorizeMiddleware, validationMiddleware(postValidation.validate), this.create
        );

        this.router.get(`${this.path}/:id`, this.getById);

        this.router.get(this.path, this.getAll);

        this.router.delete(`${this.path}/delete`, authorizeMiddleware, this.deletePost);

    }

    private create = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {
            const post = req.body;

            const data = await this.PostService.create(post);

            res.status(201).json({ data });
        } catch (error: any) {
            next(new HttpException(400, 'Cannot create post' + error));
        }
    };

    private getById = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {
            const id: String = req.params.id;

            const post = await this.PostService.getById(id);

            res.status(201).json({ post });
        } catch (error: any) {
            next(new HttpException(404, `Item doesn't exist` + error));
        }

    }

    private getAll = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {
            const post = await this.PostService.getAll();

            res.status(201).json({ post });
        } catch (error: any) {
            next(new HttpException(404, `Item doesn't exist` + error));
        }

    }

    private deletePost = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {
            const { id } = req.body

            await this.PostService.deleteItem(id)

            res.status(204);
        } catch (error: any) {
            next(new HttpException(404, `item doesn't exist` + error));
        }
    }

}


export default PostController;