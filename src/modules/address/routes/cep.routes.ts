import { Router } from 'express';
import GetCepController from '../controllers/GetCepController';

const getRouter = Router();

const getCepController = new GetCepController();

getRouter.post('/', getCepController.index);


export default getRouter;