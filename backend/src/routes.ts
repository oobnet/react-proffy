import express from 'express'
import ClasseController from './controllers/ClasseController';
import ConnectionController from './controllers/ConnectionController';
const classeController = new ClasseController()
const connectionController = new ConnectionController()

const routes = express.Router()

routes.get('/classes',classeController.index)
routes.post('/classes',classeController.create)

routes.get('/connections',connectionController.index)
routes.post('/connections',connectionController.create)

export default routes