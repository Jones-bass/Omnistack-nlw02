import { Repository } from 'typeorm'

import { AppDataSource } from '../../data-source'
import {
  ICreateUsersDTO,
  IUsersRepository,
  ScheduleItem,
} from './IUsersRepository'

import { Users } from '../entities/Users'
import { ClassSchedule } from '../entities/ClassSchedule'
import { Classes } from '../entities/Classes'
import { convertHoursToMinutes } from '../../utils/convertHourtToMinuts'

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
    name,
    whatsapp,
    subject,
    cost,
    schedule,
  }: ICreateUsersDTO): Promise<Users> {
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
}
