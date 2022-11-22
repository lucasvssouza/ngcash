import { Router } from "express";
import { AccountsController } from "./controllers/AccountsController";
import {
  UserMiddleware,
} from "./middlewares/AuthMiddleware";

const routes = Router();

routes.post("/register", new AccountsController().create);
routes.post("/login", new AccountsController().login);

routes.get("/getuser", UserMiddleware, new AccountsController().getUser);

routes.post("/history", UserMiddleware, new AccountsController().history);

routes.post("/transfer", UserMiddleware, new AccountsController().transfer);


export default routes;
