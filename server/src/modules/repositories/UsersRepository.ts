import { Repository } from 'typeorm'

import { AppDataSource } from '../../data-source'
import {
  ICreateUsersDTO,
  IUsersRepository,
  ScheduleItem,
  ScheduleItems,
} from './IUsersRepository'

import { User } from '../entities/User'
import { ClassSchedule } from '../entities/ClassSchedule'
import { Class } from '../entities/Class'
import { convertHoursToMinutes } from '../../utils/convertHourtToMinuts'

export type CombinedResult = ClassSchedule[] | Class[] | undefined

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>
  private classesRepository: Repository<Class>
  private classScheduleRepository: Repository<ClassSchedule>

  constructor() {
    this.repository = AppDataSource.getRepository(User)
    this.classesRepository = AppDataSource.getRepository(Class)
    this.classScheduleRepository = AppDataSource.getRepository(ClassSchedule)
  }

  async create({
    avatar,
    bio,
    name,
    whatsapp,
    subject,
    cost,
    schedule,
  }: ICreateUsersDTO): Promise<User> {
    const createUser = this.repository.create({
      avatar,
      bio,
      name,
      whatsapp,
    })

    const user = await this.repository.save(createUser)

    const newClass = this.classesRepository.create({
      subject,
      cost,
      user,
    })

    const newClassSaved = await this.classesRepository.save(newClass)

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return this.classScheduleRepository.create({
        class: newClassSaved,
        week_day: scheduleItem.week_day,
        from: convertHoursToMinutes(scheduleItem.from),
        to: convertHoursToMinutes(scheduleItem.to),
      })
    })

    await this.classScheduleRepository.save(classSchedule)

    return user
  }

  async listClasses({
    week_day,
    to,
    subject,
  }: ScheduleItems): Promise<CombinedResult> {
    if (week_day && to) {
      const listClassesOn = await this.classScheduleRepository.find({
        where: {
          week_day,
          to: convertHoursToMinutes(to),
        },
        relations: ['class', 'class.user'],
      })

      return listClassesOn
    } else if (subject) {
      const listClassesOn = await this.classesRepository.find({
        where: { subject },
        relations: ['user'],
      })
      return listClassesOn
    }

    return undefined
  }
}
