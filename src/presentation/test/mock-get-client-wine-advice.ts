import { Product } from '@/domain/models/product'
import { mockProductModel } from '@/domain/test/mock-product'
import { GetClientWineAdvice } from '@/domain/usecases/client/get-client-wine-advice'

export const mockGetClientWineAdvice = (): GetClientWineAdvice => {
  class GetClientWineAdviceStub implements GetClientWineAdvice {
    async getWineAdvice (): Promise<Product> {
      return mockProductModel()
    }
  }
  return new GetClientWineAdviceStub()
}
