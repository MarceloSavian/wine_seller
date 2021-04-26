import { GetClientWineAdvice } from '@/domain/usecases/client/get-client-wine-advice'
import { InvalidParamError } from '@/presentation/errors/invalid-param-error'
import { ok, serverError, badRequest } from '@/presentation/helpers/http/http-helper'
import { Controller } from '@/presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@/presentation/protocols/http'

export class GetClientWineAdviceController implements Controller {
  constructor (
    private readonly getClientWineAdvice: GetClientWineAdvice
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { clientId } = httpRequest.params

      if (!clientId) return badRequest(new InvalidParamError('clientId'))

      const product = await this.getClientWineAdvice.getWineAdvice(clientId)

      return ok(product)
    } catch (error) {
      return serverError(error)
    }
  }
}
