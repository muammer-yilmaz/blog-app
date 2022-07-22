import { Router } from 'express';
interface Controller {
    path: String // don't forget to start path with a \ 
    router: Router;
}

export default Controller;
