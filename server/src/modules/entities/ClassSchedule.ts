import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Classes } from './Classes'

@Entity('class_schedule')
export class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  class_id: string

  @ManyToOne(() => Classes, (classEntity) => classEntity.class_schedule)
  @JoinColumn({ name: 'class_id' })
  class: Classes

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
