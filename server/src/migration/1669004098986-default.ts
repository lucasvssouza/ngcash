import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669004098986 implements MigrationInterface {
    name = 'default1669004098986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT '2022-11-21 04:10:39.237516'`);
    }

}
