import { Repository } from 'typeorm'

import { AppDataSource } from '../../data-source'
import {
  IConnectionsRepository,
  ICreateConnectionsDTO,
} from './IConnectionsRepository'
import { Connections } from '../entities/Connections'

export class ConnectionsRepository implements IConnectionsRepository {
  private repository: Repository<Connections>

  constructor() {
    this.repository = AppDataSource.getRepository(Connections)
  }

  async create({ user_id }: ICreateConnectionsDTO): Promise<Connections> {
    const createUser = this.repository.create({
      user_id,
    })

    await this.repository.save(createUser)

    return createUser
  }

  async list(total: string): Promise<number> {
    const [, totalCount] = await this.repository.findAndCount()

    console.log(total)
    return totalCount
  }
}
