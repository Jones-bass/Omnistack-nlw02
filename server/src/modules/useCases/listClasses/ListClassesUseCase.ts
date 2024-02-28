import { inject, injectable } from 'tsyringe'
import {
  CombinedResult,
  UsersRepository,
} from '../../repositories/UsersRepository'

interface IRequest {
  week_day: number
  subject: string
  to: string
}

@injectable()
export class ListClassesUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async execute({ subject, to, week_day }: IRequest): Promise<CombinedResult> {
    const listClassesOn = await this.usersRepository.listClasses({
      week_day,
      subject,
      to,
    })
    return listClassesOn
  }
}
