import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableOwnFram1676005468182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "own_Fram" (
                    "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                    "name" character varying NOT NULL, 
                    "email" character varying NOT NULL, 
                    "address" character varying NOT NULL, 
                    "size" character varying NOT NULL, 
                    "yield_data" character varying NOT NULL, 
                    "drive_distance" character varying NOT NULL, 
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
                    "updatedAt" TIMESTAMP DEFAULT now(), 
                    CONSTRAINT "PK_cace4a159ff9f2512dd42373762" PRIMARY KEY ("id")
                  )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "own_Fram"`);
  }
}
