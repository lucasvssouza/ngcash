import { AppDataSource } from "../data-source";
import { Transactions } from "../entity/Transactions";

export const transactionsRepository = AppDataSource.getRepository(Transactions)