import { mockClientsTotal } from '@/domain/test/mock-client'
import { GetClientByBiggerPurchase } from '@/domain/usecases/client/get-client-by-bigger-purchase'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { mockGetClientByBiggerPurchase } from '@/presentation/test/mock-get-client-by-bigger-purchase'
import { GetClientsByBiggerPurchaseController } from './get-client-by-bigger-purchase'

type SutTypes = {
  sut: GetClientsByBiggerPurchaseController
  getClientByBiggerPurchaseStub: GetClientByBiggerPurchase
}

const mockSut = (): SutTypes => {
  const getClientByBiggerPurchaseStub = mockGetClientByBiggerPurchase()
  const sut = new GetClientsByBiggerPurchaseController(getClientByBiggerPurchaseStub)
  return {
    sut,
    getClientByBiggerPurchaseStub
  }
}

describe('GetClientsByBiggerPurchaseController', () => {
  test('Should call GetClientByBiggerPurchase', async () => {
    const { sut, getClientByBiggerPurchaseStub } = mockSut()

    const getSpy = jest.spyOn(getClientByBiggerPurchaseStub, 'getClientByBiggerPurchase')
    await sut.handle()
    expect(getSpy).toHaveBeenCalled()
  })
  test('Should returns 500 if GetClientByBiggerPurchase throws', async () => {
    const { sut, getClientByBiggerPurchaseStub } = mockSut()
    jest.spyOn(getClientByBiggerPurchaseStub, 'getClientByBiggerPurchase').mockRejectedValueOnce(new Error())
    const res = await sut.handle()
    expect(res).toEqual(serverError(new Error()))
  })
  test('Should return 204 if no clients returned', async () => {
    const { sut, getClientByBiggerPurchaseStub } = mockSut()
    jest.spyOn(getClientByBiggerPurchaseStub, 'getClientByBiggerPurchase').mockResolvedValueOnce(null)
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(noContent())
  })
  test('Should return 200 and return clients', async () => {
    const { sut } = mockSut()
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok(mockClientsTotal()[0]))
  })
})
