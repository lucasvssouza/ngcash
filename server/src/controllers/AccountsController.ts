import { Request, Response } from "express";
import { userRepository } from "../repositories/usersRepository";
import * as bcrypt from "bcrypt";
import { accountsRepository } from "../repositories/accountsRepository";
import { v4 as uuid } from "uuid";
import { Accounts } from "../entity/Accounts";
import { AppDataSource } from "../data-source";
import { transactionsRepository } from "../repositories/transactionsRepository";
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

    return res.json({
      user: userLogin,
      token: token,
    });
  }
  async getUser(req: Request, res: Response) {
    return res.status(200).json(req.data);
  }

  async transfer(req: Request, res: Response) {
    const { debitedUsername, creditedUsername, balance } = req.body;

    try {
      const debitedExists = await userRepository.findOneBy({
        username: debitedUsername,
      });

      const creditedExists = await userRepository.findOneBy({
        username: creditedUsername,
      });

      if (!debitedExists) {
        return res.status(500).json("Usuário não existe");
      }
      if (!creditedExists) {
        return res.status(500).json("Usuário não existe");
      }

      const { password: _, ...newDebited } = debitedExists;
      const { password, ...newCredited } = creditedExists;

      const debited = newDebited.accountId.balance - parseFloat(balance);
      const credited = newCredited.accountId.balance + parseFloat(balance);

      await AppDataSource.createQueryBuilder()
        .update(Accounts)
        .set({ balance: credited })
        .where("id = :id", { id: newCredited.accountId.id })
        .execute();

      await AppDataSource.createQueryBuilder()
        .update(Accounts)
        .set({ balance: debited })
        .where("id = :id", { id: newDebited.accountId.id })
        .execute();

      const transactionUUID = uuid();

      const newTransaction = transactionsRepository.create({
        id: transactionUUID,
        debitedAccountId: newDebited.accountId,
        creditedAccountId: newCredited.accountId,
        value: balance,
      });

      await transactionsRepository.save(newTransaction);

      return res.status(201).json("Transfêrencia concluida");
    } catch {
      return res.status(500);
    }
  }

  async history(req: Request, res: Response) {
    const { accountId } = req.body;

    const credited = await transactionsRepository.find({
      relations: { creditedAccountId: true },
      where: {
        creditedAccountId: { id: accountId.id },
      },
    });

    const debited = await transactionsRepository.find({
      relations: { debitedAccountId: true },
      where: {
        debitedAccountId: { id: accountId.id },
      },
    });

    return res.json({
      credited: credited,
      debited: debited,
    });
  }
}
