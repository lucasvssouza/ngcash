import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669149844783 implements MigrationInterface {
    name = 'default1669149844783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accounts" ("id" character varying NOT NULL, "balance" numeric(12,2) NOT NULL DEFAULT '100', CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" character varying NOT NULL, "value" numeric NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "debitedAccountId" character varying, "creditedAccountId" character varying, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "accountId" character varying, CONSTRAINT "UQ_450a05c0c4de5b75ac8d34835b9" UNIQUE ("password"), CONSTRAINT "REL_42bba679e348de51a699fb0a80" UNIQUE ("accountId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_e48084dca44e4ce200cb6c295d8" FOREIGN KEY ("debitedAccountId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_90970e74d61cc1e18df1564e3be" FOREIGN KEY ("creditedAccountId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_42bba679e348de51a699fb0a803" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_42bba679e348de51a699fb0a803"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_90970e74d61cc1e18df1564e3be"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_e48084dca44e4ce200cb6c295d8"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
    }

}
