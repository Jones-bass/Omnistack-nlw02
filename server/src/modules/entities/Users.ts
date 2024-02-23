import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text' })
  avatar: string

  @Column({ type: 'text' })
  whatsapp: string

  @Column({ type: 'text' })
  bio: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
