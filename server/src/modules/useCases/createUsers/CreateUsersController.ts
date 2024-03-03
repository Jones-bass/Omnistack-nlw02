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
        name,
        whatsapp,
        subject,
        cost,
        schedule, 
    } = request.body

      const createUsersUseCase = container.resolve(CreateUsersUseCase)

      await createUsersUseCase.execute({ avatar, bio, name, whatsapp, subject, cost, schedule })
    } catch (err) {
      console.log(err)
    }

    return response.status(201).json({ Message: 'Usuário cadastrado com sucesso' })
  }
}
