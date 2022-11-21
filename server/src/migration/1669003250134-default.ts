import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669003250134 implements MigrationInterface {
    name = 'default1669003250134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT '2022-11-21 04:00:17.238787'`);
    }

}
