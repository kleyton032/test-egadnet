import { Router } from "express";
import usersRouter from "../modules/users/routes/user.routes";
import getCepRouter from "../modules/address/routes/cep.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/getCep', getCepRouter);

export default routes;