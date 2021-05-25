import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClient1621952822298 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'cliente',
          columns: [
            {
              name: "id",
              type: "numeric",
              isPrimary: true
            },
            {
              name: "nome",
              type: "varchar",
            },
          ]
        }
      )
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cliente");
  }

}
