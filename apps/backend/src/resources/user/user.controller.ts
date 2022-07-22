import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../utils/interfaces/controller.interface';
import UserService from './user.service';
import validationMiddleware from '../../middlewares/validation.middleware';
import userValidation from './user.validation';
import HttpException from '../../utils/exceptions/http.exception';

class UserController implements Controller {

    public path = "/users";
    public router = Router();

    private UserService = new UserService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {

        this.router.post(
            `${this.path}`, validationMiddleware(userValidation.validate), this.create);

        this.router.get(
            `${this.path}`, this.getAll);
    }

    private create = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {


        try {
            const user = req.body;

            const data = await this.UserService.create(user)
            res.status(200).json({ data });
        } catch (error) {
            next(new HttpException(400, "user creation error"));
        }
    }

    private getAll = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {

            const users = this.UserService.getAll();
            res.status(200).json({ users })
        } catch (error) {
            next(new HttpException(400, "user get error"));
        }

    }

}




export default UserController;