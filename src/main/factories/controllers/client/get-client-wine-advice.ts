import { GetClientWineAdviceController } from '@/presentation/controllers/client/get-client-wine-advice/get-client-wine-advice-controller'
import { Controller } from '@/presentation/protocols/controller'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { makeGetClientWineAdvice } from '../../usecases/client/get-client-wine-advice'

export const makeGetClientWineAdviceController = (): Controller => {
  const getClientWineAdviceController = new GetClientWineAdviceController(makeGetClientWineAdvice())
  return makeLogControllerDecorator(getClientWineAdviceController)
}
