import { container } from 'tsyringe'
import { Response, Request } from 'express'
import { ListClassesUseCase } from './ListClassesUseCase'

export class ListClassesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const filters = request.query

    const subject = filters.subject as string
    const week_day = Number(filters.week_day)
    const time = filters.time as string

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes',
      })
    }

    const listClassesUseCase = container.resolve(ListClassesUseCase)

    const classes = await listClassesUseCase.execute({
      week_day,
      subject,
      to: time,
    })

    return response.json(classes)
  }
}
