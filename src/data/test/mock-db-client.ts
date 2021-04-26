import { ClientTotal } from '@/domain/models/client'
import { Product } from '@/domain/models/product'
import { mockClientsTotal } from '@/domain/test/mock-client'
import { mockProductModel } from '@/domain/test/mock-product'
import { GetClientByBiggerPurchaseRepository } from '../protocols/db/client/get-client-by-bigger-purchase'
import { GetClientProductsRepository } from '../protocols/db/client/get-client-products'
import { GetClientsByPurchaseValueRepository } from '../protocols/db/client/get-clients-by-purchase-value'
import { GetMostBuyerClientRepository } from '../protocols/db/client/get-most-buyer-client'

export const mockGetClientsByPurchaseValueRepository = (): GetClientsByPurchaseValueRepository => {
  class GetClientsByPurchaseValueRepositoryStub implements GetClientsByPurchaseValueRepository {
    async getByPurchaseValue (): Promise<ClientTotal[]> {
      return mockClientsTotal()
    }
  }
  return new GetClientsByPurchaseValueRepositoryStub()
}

export const mockGetClientByBiggerPurchaseRepository = (): GetClientByBiggerPurchaseRepository => {
  class GetClientByBiggerPurchaseRepositoryStub implements GetClientByBiggerPurchaseRepository {
    async getClientByBiggerPurchase (): Promise<ClientTotal | null> {
      return mockClientsTotal()[0]
    }
  }
  return new GetClientByBiggerPurchaseRepositoryStub()
}

export const mockGetMostBuyerClientRepository = (): GetMostBuyerClientRepository => {
  class GetMostBuyerClientRepositoryStub implements GetMostBuyerClientRepository {
    async getMostBuyerClient (): Promise<ClientTotal[]> {
      return mockClientsTotal()
    }
  }
  return new GetMostBuyerClientRepositoryStub()
}

export const mockGetClientProductsRepository = (): GetClientProductsRepository => {
  class GetClientProductsRepositoryStub implements GetClientProductsRepository {
    async getClientProducts (): Promise<Product[]> {
      return [mockProductModel()]
    }
  }
  return new GetClientProductsRepositoryStub()
}
