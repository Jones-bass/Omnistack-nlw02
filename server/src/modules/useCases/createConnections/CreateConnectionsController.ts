/* eslint-disable prettier/prettier */
import { container } from 'tsyringe'
import { Response, Request } from 'express'
import { CreateConnectionsUseCase } from './CreateConnectionsUseCase'

export class CreateConnectionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.body

      const createConnectionsUseCase = container.resolve(CreateConnectionsUseCase)

      await createConnectionsUseCase.execute({ user_id })
    } catch (err) {
      console.log(err)
    }

    return response.status(201).json({ Message: 'Conexão realizada com sucesso' })
  }
}
