import { GetClientsByPurchaseValueRepository } from '@/data/protocols/db/client/get-clients-by-purchase-value'
import { mockGetClientsByPurchaseValueRepository } from '@/data/test/mock-db-client'
import { mockClientsTotal } from '@/domain/test/mock-client'
import { DbGetClientsByPurchaseValue } from './get-clients-by-purchase-value'

type SutTypes = {
  sut: DbGetClientsByPurchaseValue
  getClientsByPurchaseValueRepositoryStub: GetClientsByPurchaseValueRepository
}

const mockSut = (): SutTypes => {
  const getClientsByPurchaseValueRepositoryStub = mockGetClientsByPurchaseValueRepository()
  return {
    sut: new DbGetClientsByPurchaseValue(getClientsByPurchaseValueRepositoryStub),
    getClientsByPurchaseValueRepositoryStub
  }
}

describe('DbGetClientsByPurchaseValue', () => {
  test('Ensure calls GetClientsByPurchaseValueRepository with correct values', async () => {
    const { sut, getClientsByPurchaseValueRepositoryStub } = mockSut()
    const getSpy = jest.spyOn(getClientsByPurchaseValueRepositoryStub, 'getByPurchaseValue')
    await sut.getByPurchaseValue()
    expect(getSpy).toHaveBeenCalled()
  })
  test('should throws if GetClientsByPurchaseValueRepository throws', async () => {
    const { sut, getClientsByPurchaseValueRepositoryStub } = mockSut()
    jest.spyOn(getClientsByPurchaseValueRepositoryStub, 'getByPurchaseValue').mockRejectedValueOnce(new Error())
    const promise = sut.getByPurchaseValue()
    await expect(promise).rejects.toThrow()
  })
  test('should returns clients if succeds', async () => {
    const { sut } = mockSut()
    const value = await sut.getByPurchaseValue()
    expect(value).toEqual(mockClientsTotal())
  })
})
