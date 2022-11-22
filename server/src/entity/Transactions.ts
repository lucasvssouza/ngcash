import {
  Column,
  UpdateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Entity("transactions")
export class Transactions {
  @PrimaryColumn({ type: "varchar" })
  id: string;

  @ManyToOne(() => Accounts, (accounts) => accounts.id, { eager: true })
  @JoinColumn({ name: "debitedAccountId" })
  debitedAccountId: Accounts;

  @ManyToOne(() => Accounts, (accounts) => accounts.id, { eager: true })
  @JoinColumn({ name: "creditedAccountId" })
  creditedAccountId: Accounts;

  @Column({
    type: "decimal",
    scale: 2,
  })
  value: number;

  @UpdateDateColumn({ type: "timestamp" })
  createdAt: number;
}
