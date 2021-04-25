import { ClientTotal } from '@/domain/models/client'
import { mockClientsTotal } from '@/domain/test/mock-client'
import { GetClientsByPurchaseValue } from '@/domain/usecases/client/get-clients-by-purchase-value'

export const mockGetClientsByPurchaseValue = (): GetClientsByPurchaseValue => {
  class GetClientsByPurchaseValueStub implements GetClientsByPurchaseValue {
    async getByPurchaseValue (): Promise<ClientTotal[]> {
      return mockClientsTotal()
    }
  }
  return new GetClientsByPurchaseValueStub()
}
