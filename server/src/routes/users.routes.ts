import { Router } from 'express'
import { CreateUsersController } from '../modules/useCases/createUsers/CreateUsersController'
import { ListClassesController } from '../modules/useCases/listClasses/ListClassesController'

export const usersRoutes = Router()

const createUsersController = new CreateUsersController()
const listClassesController = new ListClassesController()

usersRoutes.post('/', createUsersController.handle)
usersRoutes.get('/', listClassesController.handle)
