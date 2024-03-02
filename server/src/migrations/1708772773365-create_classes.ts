import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateClasses1708772773365 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'subject',
            type: 'varchar',
          },
          {
            name: 'cost',
            type: 'numeric',
            precision: 10,
            scale: 2,
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'ClassUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('classes')
  }
}
