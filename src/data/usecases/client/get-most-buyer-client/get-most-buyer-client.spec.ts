import { GetMostBuyerClientRepository } from '@/data/protocols/db/client/get-most-buyer-client'
import { mockGetMostBuyerClientRepository } from '@/data/test/mock-db-client'
import { mockClientsTotal } from '@/domain/test/mock-client'
import { DbGetMostBuyerClient } from './get-most-buyer-client'

type SutTypes = {
  sut: DbGetMostBuyerClient
  getMostBuyerClientRepositoryStub: GetMostBuyerClientRepository
}

const mockSut = (): SutTypes => {
  const getMostBuyerClientRepositoryStub = mockGetMostBuyerClientRepository()
  return {
    sut: new DbGetMostBuyerClient(getMostBuyerClientRepositoryStub),
    getMostBuyerClientRepositoryStub
  }
}

describe('DbGetMostBuyerClient', () => {
  test('Ensure calls GetMostBuyerClientRepository with correct values', async () => {
    const { sut, getMostBuyerClientRepositoryStub } = mockSut()
    const getSpy = jest.spyOn(getMostBuyerClientRepositoryStub, 'getMostBuyerClient')
    await sut.getMostBuyerClient()
    expect(getSpy).toHaveBeenCalled()
  })
  test('should throws if GetMostBuyerClientRepository throws', async () => {
    const { sut, getMostBuyerClientRepositoryStub } = mockSut()
    jest.spyOn(getMostBuyerClientRepositoryStub, 'getMostBuyerClient').mockRejectedValueOnce(new Error())
    const promise = sut.getMostBuyerClient()
    await expect(promise).rejects.toThrow()
  })
  test('should returns clients if succeds', async () => {
    const { sut } = mockSut()
    const value = await sut.getMostBuyerClient()
    expect(value).toEqual(mockClientsTotal()[0])
  })
})
