import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { User } from './User'
import { ClassSchedule } from './ClassSchedule'

@Entity('classes')
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  subject: string

  @Column({ type: 'text' })
  cost: number

  @Column({ type: 'text' })
  user_id: string

  @ManyToOne(() => User, (user) => user.classes)
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(() => ClassSchedule, (classSchedule) => classSchedule.class, {
    cascade: ['insert'],
  })
  class_schedule: ClassSchedule[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
