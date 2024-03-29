import UserModel from './user.model';
import User from './user.interface';
import token from '../../utils/token';
import { validatePassword } from '../../utils/util';


class UserService {

    private user = UserModel;

    public async create(user: User): Promise<string | void> {

        try {
            const date = new Date();
            console.log(user);

            const data = await this.user.create({ ...user, createdDate: date.toISOString() })
            if (data instanceof UserModel)
                return "Account created";
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async login(mail: string, password: string): Promise<string | void> {

        try {
            const user = await this.user.findOne({ mail: mail });

            if (!user) {
                throw new Error("Unable to find user with that email address");
            }


            if (await validatePassword(password, user.password)) {
                return token.createToken(user);
            } else {
                throw new Error('Wrong credentials given');
            }

        } catch (error: any) {
            throw new Error(error);
        }

    }

    public async getAll() {
        try {
            const data = await this.user.find({});

            return data;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getById(id: string) {
        try {
            const data = await this.user.where({
                _id: id
            }).exec()
            return data[0];
        } catch (error: any) {
            throw new Error(error);
        }
    }



}

export default UserService;