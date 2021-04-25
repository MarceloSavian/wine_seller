import { mockClientsTotal } from '@/domain/test/mock-client'
import { GetClientsByPurchaseValue } from '@/domain/usecases/client/get-clients-by-purchase-value'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { mockGetClientsByPurchaseValue } from '@/presentation/test/mock-get-clients-by-purchase-value'
import { GetClientsByPurchaseValueController } from './get-clients-by-purchase-value-controller'

type SutTypes = {
  sut: GetClientsByPurchaseValueController
  getClientsByPurchaseValueStub: GetClientsByPurchaseValue
}

const mockSut = (): SutTypes => {
  const getClientsByPurchaseValueStub = mockGetClientsByPurchaseValue()
  const sut = new GetClientsByPurchaseValueController(getClientsByPurchaseValueStub)
  return {
    sut,
    getClientsByPurchaseValueStub
  }
}

describe('GetClientsByPurchaseValueController', () => {
  test('Should call getClientsByPurchaseValue', async () => {
    const { sut, getClientsByPurchaseValueStub } = mockSut()

    const getSpy = jest.spyOn(getClientsByPurchaseValueStub, 'getByPurchaseValue')
    await sut.handle()
    expect(getSpy).toHaveBeenCalled()
  })
  test('Should returns 500 if GetAccountByUserIdStub throws', async () => {
    const { sut, getClientsByPurchaseValueStub } = mockSut()
    jest.spyOn(getClientsByPurchaseValueStub, 'getByPurchaseValue').mockRejectedValueOnce(new Error())
    const res = await sut.handle()
    expect(res).toEqual(serverError(new Error()))
  })
  test('Should return 204 if no clients returned', async () => {
    const { sut, getClientsByPurchaseValueStub } = mockSut()
    jest.spyOn(getClientsByPurchaseValueStub, 'getByPurchaseValue').mockResolvedValueOnce([])
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(noContent())
  })
  test('Should return 200 and return clients', async () => {
    const { sut } = mockSut()
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok(mockClientsTotal()))
  })
})
