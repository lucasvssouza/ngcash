import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Accounts } from "./Accounts";

@Entity("transactions")
export class Transactions {
  @PrimaryColumn({type:"varchar"})
  id: string;

  @ManyToOne(() => Accounts, (accounts) => accounts.id)
  @JoinColumn({ name: "debitedAccountId" })
  debitedAccountId: Accounts;

  @ManyToOne(() => Accounts, (accounts) => accounts.id)
  @JoinColumn({ name: "creditedAccountId" })
  creditedAccountId: Accounts;

  @Column({
    type: "decimal",
    precision: 2,
    scale: 2,
  })
  value: number;

  @CreateDateColumn({
    type: "timestamp",
    default: "now()",
  })
  createdAt: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
