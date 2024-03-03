import { Connections } from '../entities/Connections'

export interface ICreateConnectionsDTO {
  user_id: string
}

export interface IConnectionsRepository {
  create(data: ICreateConnectionsDTO): Promise<Connections>
  list(total: string): Promise<number>
}
