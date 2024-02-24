import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Users } from './Users'
import { ClassSchedule } from './ClassSchedule'

@Entity('classes')
export class Classes {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  subject: string

  @Column({ type: 'text' })
  cost: number

  @Column({ type: 'text' })
  user_id: string

  @ManyToOne(() => Users, (user) => user.classes)
  @JoinColumn({ name: 'user_id' })
  user: Users

  @OneToMany(() => ClassSchedule, (classSchedule) => classSchedule.class, {
    cascade: ['insert'],
  })
  class_schedule: ClassSchedule[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
