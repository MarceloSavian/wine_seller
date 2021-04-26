import { mockProductModel } from '@/domain/test/mock-product'
import { GetClientWineAdvice } from '@/domain/usecases/client/get-client-wine-advice'
import { InvalidParamError } from '@/presentation/errors/invalid-param-error'
import { badRequest, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { mockGetClientWineAdvice } from '@/presentation/test/mock-get-client-wine-advice'
import { GetClientWineAdviceController } from './get-client-wine-advice-controller'

type SutTypes = {
  sut: GetClientWineAdviceController
  getClientWineAdviceStub: GetClientWineAdvice
}

const mockSut = (): SutTypes => {
  const getClientWineAdviceStub = mockGetClientWineAdvice()
  const sut = new GetClientWineAdviceController(getClientWineAdviceStub)
  return {
    sut,
    getClientWineAdviceStub
  }
}

describe('GetClientWineAdviceController', () => {
  test('Should call GetClientWineAdvice with correct values', async () => {
    const { sut, getClientWineAdviceStub } = mockSut()

    const getSpy = jest.spyOn(getClientWineAdviceStub, 'getWineAdvice')
    await sut.handle({ params: { clientId: 'any_id' } })
    expect(getSpy).toHaveBeenCalledWith('any_id')
  })
  test('Should returns 500 if GetClientWineAdvice throws', async () => {
    const { sut, getClientWineAdviceStub } = mockSut()
    jest.spyOn(getClientWineAdviceStub, 'getWineAdvice').mockRejectedValueOnce(new Error())
    const res = await sut.handle({ params: { clientId: 'any_id' } })
    expect(res).toEqual(serverError(new Error()))
  })
  test('Should returns 400 if no clientId is providade', async () => {
    const { sut } = mockSut()
    const res = await sut.handle({ params: { } })
    expect(res).toEqual(badRequest(new InvalidParamError('clientId')))
  })
  test('Should return 200 and return product', async () => {
    const { sut } = mockSut()
    const httpResponse = await sut.handle({ params: { clientId: 'any_id' } })
    expect(httpResponse).toEqual(ok(mockProductModel()))
  })
})
