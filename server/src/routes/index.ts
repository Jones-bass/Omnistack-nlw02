import { Router } from 'express'
import { CreateConnectionsController } from '../modules/useCases/createConnections/CreateConnectionsController'
import { ListConnectionsController } from '../modules/useCases/listConnections/ListConnectionsController'
import { ListClassesController } from '../modules/useCases/listClasses/ListClassesController'
import { CreateUsersController } from '../modules/useCases/createUsers/CreateUsersController'

export const router = Router()

const createUsersController = new CreateUsersController()
const listClassesController = new ListClassesController()

const createConnectionsController = new CreateConnectionsController()
const listConnectionsController = new ListConnectionsController()

router.post('/users', createUsersController.handle)
router.get('/users', listClassesController.handle)

router.post('/connections', createConnectionsController.handle)
router.get('/connections', listConnectionsController.handle)
