/* eslint-disable prettier/prettier */
import { container } from 'tsyringe'
import { Response, Request } from 'express'
import { CreateUsersUseCase } from './CreateUsersUseCase'

export class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        avatar, 
        bio,
        nome,
        whatsapp,
        subject,
        cost,
        schedule, 
    } = request.body

      const createTodoUseCase = container.resolve(CreateUsersUseCase)

      await createTodoUseCase.execute({ avatar, bio, nome, whatsapp, subject, cost, schedule })
    } catch (err) {
      console.log(err)
    }

    return response.status(201).json({ Usuario: 'Criado com sucesso' })
  }
}
