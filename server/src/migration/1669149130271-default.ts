import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669149130271 implements MigrationInterface {
    name = 'default1669149130271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "value" TYPE numeric`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "value" TYPE numeric`);
    }

}
