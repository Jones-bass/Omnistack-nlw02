/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe'
import { UsersRepository } from '../../repositories/UsersRepository'

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

interface IRequest {
  name: string
  avatar: string
  whatsapp: string
  bio: string
  subject: string
  cost: number
  schedule: ScheduleItem[]
}

@injectable()
export class CreateUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async execute({ avatar, bio, name, whatsapp, subject, cost, schedule }: IRequest): Promise<void> {
    await this.usersRepository.create({ avatar, bio, name, whatsapp, subject, cost, schedule })
  }
}
