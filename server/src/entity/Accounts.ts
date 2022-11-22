import { Entity, Column, PrimaryColumn } from "typeorm";
export class ColumnNumericTransformer {
  to(data: number): number {
    return data;
  }
  from(data: string): number {
    return parseFloat(data);
  }
}

@Entity("accounts")
export class Accounts {
  @PrimaryColumn({ type: "varchar" })
  id: string;

  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    default: 100.0,
    transformer: new ColumnNumericTransformer(),
  })
  balance: number;
}
