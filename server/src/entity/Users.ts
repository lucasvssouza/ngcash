import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Accounts } from "./Accounts";

@Entity("users")
export class Users {
  @PrimaryColumn({ type: "varchar" })
  id: string;

  @Column({
    type: "varchar",
  })
  username: string;

  @Column({
    type: "varchar",
    unique: true,
  })
  password: string;

  @OneToOne((type) => Accounts, { eager: true })
  @JoinColumn({ name: "accountId" })
  accountId: Accounts;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
