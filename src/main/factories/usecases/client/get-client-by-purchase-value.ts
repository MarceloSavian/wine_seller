import { DbGetClientsByPurchaseValue } from '@/data/usecases/client/get-clients-by-purchase-value/get-clients-by-purchase-value'
import { GetClientsByPurchaseValue } from '@/domain/usecases/client/get-clients-by-purchase-value'
import { ClientMongoRepository } from '@/infra/db/mongodb/client/client-mongo-repository'

export const makeGetClientByPurchaseValue = (): GetClientsByPurchaseValue => {
  const clientRepository = new ClientMongoRepository()
  return new DbGetClientsByPurchaseValue(clientRepository)
}
