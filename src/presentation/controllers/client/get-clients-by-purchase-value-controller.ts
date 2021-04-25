import { GetClientsByPurchaseValue } from '@/domain/usecases/client/get-clients-by-purchase-value'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class GetClientsByPurchaseValueController implements Controller {
  constructor (
    private readonly getClientsByPurchaseValue: GetClientsByPurchaseValue
  ) { }

  async handle (): Promise<HttpResponse> {
    try {
      const clients = await this.getClientsByPurchaseValue.getByPurchaseValue()

      if (clients.length === 0) return noContent()

      return ok(clients)
    } catch (error) {
      return serverError(error)
    }
  }
}
