import { GetClientsByPurchaseValueController } from '@/presentation/controllers/client/get-clients-by-purchase-value-controller'
import { Controller } from '@/presentation/protocols/controller'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { makeGetClientByPurchaseValue } from '../../usecases/client/get-client-by-purchase-value'

export const makeClientByPurchaseValueController = (): Controller => {
  const getClientsByPurchaseValueController = new GetClientsByPurchaseValueController(makeGetClientByPurchaseValue())
  return makeLogControllerDecorator(getClientsByPurchaseValueController)
}
