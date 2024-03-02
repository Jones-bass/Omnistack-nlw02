/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe'
import { ConnectionsRepository } from '../../repositories/ConnectionsRepository'

interface IRequest {
  user_id: string
}

@injectable()
export class CreateConnectionsUseCase {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: ConnectionsRepository,
  ) {}

  async execute({ user_id }: IRequest): Promise<void> {
    await this.connectionsRepository.create({ user_id })
  }
}
