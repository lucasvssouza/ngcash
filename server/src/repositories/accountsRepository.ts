import { AppDataSource } from "../data-source";
import { Accounts } from "../entity/Accounts";

export const accountsRepository = AppDataSource.getRepository(Accounts)