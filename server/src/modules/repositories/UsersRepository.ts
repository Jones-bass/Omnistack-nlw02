import { Repository } from 'typeorm'

import { AppDataSource } from '../../data-source'
import { ICreateUsersDTO, IUsersRepository } from './IUsersRepository'
import { Users } from '../entities/Users'

export class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>

  constructor() {
    this.repository = AppDataSource.getRepository(Users)
  }

  async create({
    avatar,
    bio,
    name,
    whatsapp,
  }: ICreateUsersDTO): Promise<Users> {
    const todo = this.repository.create({
      avatar,
      bio,
      name,
      whatsapp,
    })

    await this.repository.save(todo)

    return todo
  }
}
