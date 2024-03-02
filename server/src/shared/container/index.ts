import { container } from 'tsyringe'

import { IUsersRepository } from '../../modules/repositories/IUsersRepository'
import { UsersRepository } from '../../modules/repositories/UsersRepository'

import { ConnectionsRepository } from '../../modules/repositories/ConnectionsRepository'
import { IConnectionsRepository } from '../../modules/repositories/IConnectionsRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<IConnectionsRepository>(
  'ConnectionsRepository',
  ConnectionsRepository,
)
