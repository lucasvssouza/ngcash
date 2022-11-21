import { NextFunction, Request, Response } from "express";
import { accountsRepository } from "../repositories/accountsRepository";
import { userRepository } from "../repositories/usersRepository";
var jwt = require("jsonwebtoken");

export const UserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json("Não autorizado");
  }

  const token = authorization.split(" ")[1];

  const { id } = jwt.verify(token, process.env.JWT_PASS);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    return res.status(401).json("Não autorizado");
  }

  const { password: _, ...loggedUser } = user;

  const account = await accountsRepository.findOneBy(loggedUser.accountId);

  req.data = { userData: loggedUser, accountData: account };

  next();
};
