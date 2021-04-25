import { Client } from '@/domain/models/client'
import { mockClients } from '@/domain/test/mock-client'
import { GetClientsByPurchaseValueRepository } from '../protocols/db/client/get-clients-by-purchase-value'

export const mockGetClientsByPurchaseValueRepository = (): GetClientsByPurchaseValueRepository => {
  class GetClientsByPurchaseValueRepositoryStub implements GetClientsByPurchaseValueRepository {
    async getByPurchaseValue (): Promise<Client[] | null> {
      return mockClients()
    }
  }
  return new GetClientsByPurchaseValueRepositoryStub()
}
