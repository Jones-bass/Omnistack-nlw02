import { container } from 'tsyringe'
import { Response, Request } from 'express'
import { CreateUsersUseCase } from './CreateUsersUseCase'

export class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { avatar, bio, name, whatsapp } = request.body

      const createTodoUseCase = container.resolve(CreateUsersUseCase)

      await createTodoUseCase.execute({ avatar, bio, name, whatsapp })
    } catch (err) {
      console.log(err)
    }

    return response.status(201).json({ Todo: 'Criado com sucesso' })
  }
}
