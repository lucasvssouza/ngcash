import { Accounts } from "../../src/entity/Accounts";
import { Users } from "../../src/entity/Users";

declare global {
  namespace Express {
    export interface Request {
      data: { userData: Partial<Users>, accountData: Accounts };
    }
  }
}
