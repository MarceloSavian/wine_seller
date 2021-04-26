import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { GetMostBuyerClient } from '@/domain/usecases/client/get-most-buyer-client'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helper'

export class GetMostBuyersClientsController implements Controller {
  constructor (
    private readonly getMostBuyerClient: GetMostBuyerClient
  ) { }

  async handle (): Promise<HttpResponse> {
    try {
      const clients = await this.getMostBuyerClient.getMostBuyerClient()

      if (clients.length === 0) return noContent()

      return ok(clients)
    } catch (error) {
      return serverError(error)
    }
  }
}
