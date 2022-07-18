import 'dotenv/config';
import 'module-alias/register';
import validateEnv from './src/utils/validateEnv';
import App from './app';
import PostController from './src/resources/post/post.controller';
//import UserController from '@/resources/user/user.controller';

validateEnv();

const app = new App(
    [new PostController()],
    Number(process.env.PORT)
);

app.listen();
