import { GetMostBuyerClientRepository } from '@/data/protocols/db/client/get-most-buyer-client'
import { ClientTotal } from '@/domain/models/client'
import { GetMostBuyerClient } from '@/domain/usecases/client/get-most-buyer-client'

export class DbGetMostBuyerClient implements GetMostBuyerClient {
  constructor (
    private readonly getMostBuyerClientRepository: GetMostBuyerClientRepository
  ) {}

  async getMostBuyerClient (): Promise<ClientTotal[]> {
    return await this.getMostBuyerClientRepository.getMostBuyerClient()
  }
}
