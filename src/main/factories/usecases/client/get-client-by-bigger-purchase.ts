import { DbGetClientByBiggerPurchase } from '@/data/usecases/client/get-client-by-bigger-purchase/get-client-by-bigger-purchase'
import { GetClientByBiggerPurchase } from '@/domain/usecases/client/get-client-by-bigger-purchase'
import { ClientMongoRepository } from '@/infra/db/mongodb/client/client-mongo-repository'

export const makeGetClientByBiggerPurchase = (): GetClientByBiggerPurchase => {
  const clientRepository = new ClientMongoRepository()
  return new DbGetClientByBiggerPurchase(clientRepository)
}
