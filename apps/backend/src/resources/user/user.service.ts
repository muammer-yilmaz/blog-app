import UserModel from './user.model'
import User from './user.interface'

class UserService {

    private user = UserModel;

    public async create(user: User): Promise<User> {

        try {
            const date = new Date();
            console.log(user);

            const data = await this.user.create({ ...user, createdDate: date.toISOString() })

            return data;
        } catch (error) {
            throw new Error('user create error ' + error);
        }
    }

    public async getAll() {
        try {
            const data = await this.user.find();
            return data;
        } catch (error) {
            throw new Error(' user get error ' + error);
        }
    }


}

export default UserService;