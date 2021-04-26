import { GetMostBuyersClientsController } from '@/presentation/controllers/client/get-most-buyers-clients/get-most-buyers-clients-controller'
import { Controller } from '@/presentation/protocols/controller'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { makeGetMostBuyerClient } from '../../usecases/client/get-most-buyers-clients'

export const makeGetMostBuyerClientsController = (): Controller => {
  const getMostBuyersClientsController = new GetMostBuyersClientsController(makeGetMostBuyerClient())
  return makeLogControllerDecorator(getMostBuyersClientsController)
}
