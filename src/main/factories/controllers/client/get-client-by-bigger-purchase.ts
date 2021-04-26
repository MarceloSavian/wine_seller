import { GetClientsByBiggerPurchaseController } from '@/presentation/controllers/client/get-client-by-bigger-purchase/get-client-by-bigger-purchase'
import { Controller } from '@/presentation/protocols/controller'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { makeGetClientByBiggerPurchase } from '../../usecases/client/get-client-by-bigger-purchase'

export const makeClientByBiggerPurchaseController = (): Controller => {
  const getClientsByPurchaseValueController = new GetClientsByBiggerPurchaseController(makeGetClientByBiggerPurchase())
  return makeLogControllerDecorator(getClientsByPurchaseValueController)
}
