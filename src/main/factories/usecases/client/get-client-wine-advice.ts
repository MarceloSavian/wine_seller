import { DbGetClientWineAdvice } from '@/data/usecases/client/get-client-wine-advice/get-client-wine-advice'
import { GetClientWineAdvice } from '@/domain/usecases/client/get-client-wine-advice'
import { ClientMongoRepository } from '@/infra/db/mongodb/client/client-mongo-repository'
import { ProductMongoRepository } from '@/infra/db/mongodb/product/product-mongo-repository'

export const makeGetClientWineAdvice = (): GetClientWineAdvice => {
  const clientRepository = new ClientMongoRepository()
  const productRepository = new ProductMongoRepository()
  return new DbGetClientWineAdvice(clientRepository, productRepository)
}
