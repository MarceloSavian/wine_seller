import { ClientTotal } from '@/domain/models/client'
import { mockClientsTotal } from '@/domain/test/mock-client'
import { GetClientsByPurchaseValueRepository } from '../protocols/db/client/get-clients-by-purchase-value'

export const mockGetClientsByPurchaseValueRepository = (): GetClientsByPurchaseValueRepository => {
  class GetClientsByPurchaseValueRepositoryStub implements GetClientsByPurchaseValueRepository {
    async getByPurchaseValue (): Promise<ClientTotal[]> {
      return mockClientsTotal()
    }
  }
  return new GetClientsByPurchaseValueRepositoryStub()
}
