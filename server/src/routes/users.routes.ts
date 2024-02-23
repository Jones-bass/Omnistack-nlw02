import { Router } from 'express'
import { CreateUsersController } from '../modules/useCases/createUsers/CreateUsersController'

export const usersRoutes = Router()

const createUsersController = new CreateUsersController()

usersRoutes.post('/', createUsersController.handle)
