import { ClientTotal } from '@/domain/models/client'
import { mockClientsTotal } from '@/domain/test/mock-client'
import { GetMostBuyerClient } from '@/domain/usecases/client/get-most-buyer-client'

export const mockGetMostBuyerClient = (): GetMostBuyerClient => {
  class GetMostBuyerClientStub implements GetMostBuyerClient {
    async getMostBuyerClient (): Promise<ClientTotal[]> {
      return mockClientsTotal()
    }
  }
  return new GetMostBuyerClientStub()
}
