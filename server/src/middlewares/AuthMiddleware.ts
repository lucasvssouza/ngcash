import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";
import { accountsRepository } from "../repositories/accountsRepository";
import { userRepository } from "../repositories/usersRepository";
var jwt = require("jsonwebtoken");

export const UserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json("Não autorizado");
    }

    const id = jwt.verify(authorization, process.env.JWT_PASS);

    const checkUser = await userRepository.findOneBy({
      id: id.user_id,
    });

    const { password: _, ...loggedUser } = checkUser;

    req.data = loggedUser;
  } catch {
    res.status(401).json("Não autorizado")
  }

  next();
};
