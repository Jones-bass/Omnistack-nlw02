import { container } from 'tsyringe'
import { Response, Request } from 'express'
import { ListConnectionsUseCase } from './ListConnectionsUseCase'

export class ListConnectionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { total } = request.body

    const listConnectionsUseCase = container.resolve(ListConnectionsUseCase)

    const totalCount = await listConnectionsUseCase.execute({ total })

    return response.json({ total: totalCount })
  }
}
