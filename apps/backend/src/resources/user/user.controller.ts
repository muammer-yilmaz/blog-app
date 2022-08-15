import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../utils/interfaces/controller.interface';
import UserService from './user.service';
import validationMiddleware from '../../middlewares/validation.middleware';
import userValidation from './user.validation';
import HttpException from '../../utils/exceptions/http.exception';
import authorizeMiddleware from '../../middlewares/authorize.middleware';

class UserController implements Controller {

    public path = "/users";
    public router = Router();

    private UserService = new UserService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {

        this.router.post(
            `${this.path}/register`, validationMiddleware(userValidation.register), this.create
        );

        this.router.post(
            `${this.path}/login`, validationMiddleware(userValidation.login), this.login
        );

        this.router.get(
            `${this.path}/getAll`, this.getAll);

        this.router.post(
            `${this.path}/getById`, authorizeMiddleware, this.getById
        )
    }

    private create = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {
            const user = req.body;

            const data = await this.UserService.create(user)
            res.status(200).json({ data });
        } catch (error: any) {
            next(new HttpException(400, "" + error.message));
        }
    }

    private login = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {
            const { mail, password } = req.body;

            const token = await this.UserService.login(mail, password);
            res.status(200).json({ token });

        } catch (error: any) {
            next(new HttpException(400, error.message));
        }

    }

    private getAll = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {

            const users = await this.UserService.getAll();

            res.status(200).json({ users })
        } catch (error) {
            next(new HttpException(400, "user get error"));
        }

    }

    private getById = async (req: Request, res: Response, next: NextFunction)
        : Promise<Response | void> => {

        try {

            const { id } = req.body;
            const user = await this.UserService.getById(id)
            res.status(200).json({ user })
        } catch (error: any) {
            next(new HttpException(400, error))
        }

    }

}




export default UserController;