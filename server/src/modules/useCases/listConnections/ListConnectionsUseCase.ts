import { inject, injectable } from 'tsyringe'
import { ConnectionsRepository } from '../../repositories/ConnectionsRepository'

interface IRequest {
  total: string
}

@injectable()
export class ListConnectionsUseCase {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: ConnectionsRepository,
  ) {}

  async execute({ total }: IRequest): Promise<number> {
    const totalCount = await this.connectionsRepository.list(total)
    return totalCount
  }
}
