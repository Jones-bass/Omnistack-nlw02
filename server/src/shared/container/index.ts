import { container } from 'tsyringe'
import { IUsersRepository } from '../../modules/repositories/IUsersRepository'
import { UsersRepository } from '../../modules/repositories/UsersRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
