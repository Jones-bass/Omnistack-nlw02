import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Class } from './Class'

@Entity('class_schedule')
export class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  class_id: string

  @ManyToOne(() => Class, (classEntity) => classEntity.class_schedule)
  @JoinColumn({ name: 'class_id' })
  class: Class

  @Column({ type: 'integer' })
  week_day: number

  @Column({ type: 'integer' })
  from: number

  @Column({ type: 'integer' })
  to: number

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
