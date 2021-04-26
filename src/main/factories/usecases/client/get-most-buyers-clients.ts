
import { DbGetMostBuyerClient } from '@/data/usecases/client/get-most-buyer-client/get-most-buyer-client'
import { GetMostBuyerClient } from '@/domain/usecases/client/get-most-buyer-client'
import { ClientMongoRepository } from '@/infra/db/mongodb/client/client-mongo-repository'

export const makeGetMostBuyerClient = (): GetMostBuyerClient => {
  const clientRepository = new ClientMongoRepository()
  return new DbGetMostBuyerClient(clientRepository)
}
