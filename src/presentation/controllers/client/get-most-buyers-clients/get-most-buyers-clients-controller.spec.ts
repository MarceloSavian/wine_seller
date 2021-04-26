import { mockClientsTotal } from '@/domain/test/mock-client'
import { GetMostBuyerClient } from '@/domain/usecases/client/get-most-buyer-client'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { mockGetMostBuyerClient } from '@/presentation/test/mock-get-most-buyers-clients'
import { GetMostBuyersClientsController } from './get-most-buyers-clients-controller'

type SutTypes = {
  sut: GetMostBuyersClientsController
  getMostBuyerClientStub: GetMostBuyerClient
}

const mockSut = (): SutTypes => {
  const getMostBuyerClientStub = mockGetMostBuyerClient()
  const sut = new GetMostBuyersClientsController(getMostBuyerClientStub)
  return {
    sut,
    getMostBuyerClientStub
  }
}

describe('GetMostBuyersClientsController', () => {
  test('Should call GetMostBuyerClient', async () => {
    const { sut, getMostBuyerClientStub } = mockSut()

    const getSpy = jest.spyOn(getMostBuyerClientStub, 'getMostBuyerClient')
    await sut.handle()
    expect(getSpy).toHaveBeenCalled()
  })
  test('Should returns 500 if GetMostBuyerClient throws', async () => {
    const { sut, getMostBuyerClientStub } = mockSut()
    jest.spyOn(getMostBuyerClientStub, 'getMostBuyerClient').mockRejectedValueOnce(new Error())
    const res = await sut.handle()
    expect(res).toEqual(serverError(new Error()))
  })
  test('Should return 204 if no clients returned', async () => {
    const { sut, getMostBuyerClientStub } = mockSut()
    jest.spyOn(getMostBuyerClientStub, 'getMostBuyerClient').mockResolvedValueOnce([])
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(noContent())
  })
  test('Should return 200 and return clients', async () => {
    const { sut } = mockSut()
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok(mockClientsTotal()))
  })
})
