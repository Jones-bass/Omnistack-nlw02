import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Class } from './Class'

@Entity('users')
export class User {
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

  @OneToMany(() => Class, (classEntity) => classEntity.user)
  classes: Class[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
