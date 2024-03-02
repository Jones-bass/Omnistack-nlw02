import { User } from '../entities/User'
import { CombinedResult } from './UsersRepository'

export interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

export interface ScheduleItems {
  subject: string
  week_day: number
  to: string
}

export interface ICreateUsersDTO {
  name: string
  avatar: string
  whatsapp: string
  bio: string
  subject: string
  cost: number
  schedule: ScheduleItem[]
}

export interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<User>
  listClasses(data: ScheduleItems): Promise<CombinedResult>
}
