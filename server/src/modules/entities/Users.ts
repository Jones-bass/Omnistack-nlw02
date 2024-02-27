import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Classes } from './Classes'

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  nome: string

  @Column({ type: 'text' })
  avatar: string

  @Column({ type: 'text' })
  whatsapp: string

  @Column({ type: 'text' })
  bio: string

  @CreateDateColumn()
  created_at: Date

  @OneToMany(() => Classes, (classEntity) => classEntity.user)
  classes: Classes[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
