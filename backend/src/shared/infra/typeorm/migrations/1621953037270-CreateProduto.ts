import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduto1621953037270 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'produto',
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
            {
              name: "preco",
              type: "numeric",
            },
          ]
        }
      )
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produto");
  }


}
