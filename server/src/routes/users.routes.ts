import { Router } from 'express'
import { CreateUsersController } from '../modules/useCases/createUsers/CreateUsersController'
import { ListClassesController } from '../modules/useCases/listClasses/ListClassesController'
import { CreateConnectionsController } from '../modules/useCases/createConnections/CreateConnectionsController'
import { ListConnectionsController } from '../modules/useCases/listConnections/ListConnectionsController'

export const usersRoutes = Router()

const createUsersController = new CreateUsersController()
const listClassesController = new ListClassesController()

const createConnectionsController = new CreateConnectionsController()
const listConnectionsController = new ListConnectionsController()

usersRoutes.post('/', createUsersController.handle)
usersRoutes.get('/', listClassesController.handle)

usersRoutes.post('/connections', createConnectionsController.handle)
usersRoutes.get('/connections', listConnectionsController.handle)
