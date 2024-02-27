/* eslint-disable prettier/prettier */
import { Users } from "../entities/Users";

export interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

export interface ICreateUsersDTO {
  nome: string;
  avatar: string;
  whatsapp: string;
  bio: string;  
  subject: string
  cost: number
  schedule: ScheduleItem[]
}

export interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<Users>
}
