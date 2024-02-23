/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUser1708718653624 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'users',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'avatar',
                type: 'varchar',
              },
              {
                name: 'whatsapp',
                type: 'varchar',
              },
              {
                name: 'bio',
                type: 'varchar',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          }),
        )
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
      }
    }

    