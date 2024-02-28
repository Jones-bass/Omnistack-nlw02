import { Repository } from 'typeorm'

import { AppDataSource } from '../../data-source'
import {
  ICreateUsersDTO,
  IUsersRepository,
  ScheduleItem,
  ScheduleItems,
} from './IUsersRepository'

import { Users } from '../entities/Users'
import { ClassSchedule } from '../entities/ClassSchedule'
import { Classes } from '../entities/Classes'
import { convertHoursToMinutes } from '../../utils/convertHourtToMinuts'

export type CombinedResult = ClassSchedule[] | Classes[] | undefined

export class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>
  private classesRepository: Repository<Classes>
  private classScheduleRepository: Repository<ClassSchedule>

  constructor() {
    this.repository = AppDataSource.getRepository(Users)
    this.classesRepository = AppDataSource.getRepository(Classes)
    this.classScheduleRepository = AppDataSource.getRepository(ClassSchedule)
  }

  async create({
    avatar,
    bio,
    nome,
    whatsapp,
    subject,
    cost,
    schedule,
  }: ICreateUsersDTO): Promise<Users> {
    const createUser = this.repository.create({
      avatar,
      bio,
      nome,
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
        relations: ['class'],
      })

      return listClassesOn
    } else if (subject) {
      const listClassesOn = await this.classesRepository.find({
        where: { subject },
      })
      return listClassesOn
    }

    return undefined
  }
}
