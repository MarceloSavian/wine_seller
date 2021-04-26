import { Product } from '@/domain/models/product'
import { mockProductModel } from '@/domain/test/mock-product'
import { GetProductByFilterRepository } from '../protocols/db/product/get-product-by-filter'

export const mockGetProductByFilterRepository = (): GetProductByFilterRepository => {
  class GetProductByFilterRepositoryStub implements GetProductByFilterRepository {
    async getProductByFilter (): Promise<Product> {
      return mockProductModel()
    }
  }
  return new GetProductByFilterRepositoryStub()
}
