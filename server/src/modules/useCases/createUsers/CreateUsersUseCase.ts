import { inject, injectable } from 'tsyringe'
import { UsersRepository } from '../../repositories/UsersRepository'

interface IRequest {
  name: string
  avatar: string
  whatsapp: string
  bio: string
}

@injectable()
export class CreateUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async execute({ avatar, bio, name, whatsapp }: IRequest): Promise<void> {
    await this.usersRepository.create({ avatar, bio, name, whatsapp })
  }
}
