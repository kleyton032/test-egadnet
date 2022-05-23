import { Router } from 'express';
import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';

const usersRouter = Router();

const usersController = new UserController();
const sessionController = new SessionController();

usersRouter.post('/', usersController.createUser);
usersRouter.post('/auth', sessionController.auth);

export default usersRouter;