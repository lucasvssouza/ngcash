import { Request, Response } from "express";
import { userRepository } from "../repositories/usersRepository";
import * as bcrypt from "bcrypt";
import { accountsRepository } from "../repositories/accountsRepository";
import { v4 as uuid } from "uuid";
var jwt = require("jsonwebtoken");

export class AccountsController {
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    const userExists = await userRepository.findOneBy({ username });

    if (userExists) {
      return res.status(500).json("Usuário ja cadrastrado");
    }

    const accountUUID = uuid();

    const hashPassword = await bcrypt.hash(password, 8);

    const newAccount = accountsRepository.create({
      id: accountUUID,
      balance: 100.0,
    });

    const newUser = userRepository.create({
      username,
      password: hashPassword,
      accountId: accountUUID as unknown,
    });

    await accountsRepository.save(newAccount);

    await userRepository.save(newUser);

    const { password: _, ...user } = newUser;

    return res.status(201).json("Usuário registrado!");
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    const user = await userRepository.findOneBy({ username });

    if (!user) {
      return res.status(500).json("Usuário ou senha invalidos");
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      return res.status(500).json("Usuário ou senha invalidos");
    }

    const token = jwt.sign({ user_id: user.id }, process.env.JWT_PASS, {
      expiresIn: "24h",
    });

    const { password: _, ...userLogin } = user;

    console.log(token);

    return res.json({
      user: userLogin,
      token: token,
    });
  }
  async getUser(req: Request, res: Response) {
    return res.status(200).json(req.data);
  }
}
