import { GetClientByBiggerPurchase } from '@/domain/usecases/client/get-client-by-bigger-purchase'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class GetClientsByBiggerPurchaseController implements Controller {
  constructor (
    private readonly getClientByBiggerPurchase: GetClientByBiggerPurchase
  ) { }

  async handle (): Promise<HttpResponse> {
    try {
      const client = await this.getClientByBiggerPurchase.getClientByBiggerPurchase()

      if (!client) return noContent()

      return ok(client)
    } catch (error) {
      return serverError(error)
    }
  }
}
