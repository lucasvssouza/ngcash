import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("accounts")
export class Accounts {
  @PrimaryColumn({type:"varchar"})
  id: string;

  @Column({
    default: 100.00,
    type: "decimal"
  })
  balance: number;
}
