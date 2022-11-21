import { Router } from "express";
import { AccountsController } from "./controllers/AccountsController";
import {
  UserMiddleware,
} from "./middlewares/AuthMiddleware";

const routes = Router();

routes.post("/register", new AccountsController().create);
routes.post("/login", new AccountsController().login);

routes.get("/getuser", UserMiddleware, new AccountsController().getUser);

export default routes;
