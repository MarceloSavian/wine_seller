import { ClientTotal } from '@/domain/models/client'
import { mockClientsTotal } from '@/domain/test/mock-client'
import { GetClientByBiggerPurchase } from '@/domain/usecases/client/get-client-by-bigger-purchase'

export const mockGetClientByBiggerPurchase = (): GetClientByBiggerPurchase => {
  class GetClientByBiggerPurchaseStub implements GetClientByBiggerPurchase {
    async getClientByBiggerPurchase (): Promise<ClientTotal | null> {
      return mockClientsTotal()[0]
    }
  }
  return new GetClientByBiggerPurchaseStub()
}
