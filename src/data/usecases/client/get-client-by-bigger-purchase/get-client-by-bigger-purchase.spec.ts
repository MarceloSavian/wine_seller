import { GetClientByBiggerPurchaseRepository } from '@/data/protocols/db/client/get-client-by-bigger-purchase'
import { mockGetClientByBiggerPurchaseRepository } from '@/data/test/mock-db-client'
import { mockClientsTotal } from '@/domain/test/mock-client'
import { DbGetClientByBiggerPurchase } from './get-client-by-bigger-purchase'

type SutTypes = {
  sut: DbGetClientByBiggerPurchase
  getClientByBiggerPurchaseRepository: GetClientByBiggerPurchaseRepository
}

const mockSut = (): SutTypes => {
  const getClientByBiggerPurchaseRepository = mockGetClientByBiggerPurchaseRepository()
  return {
    sut: new DbGetClientByBiggerPurchase(getClientByBiggerPurchaseRepository),
    getClientByBiggerPurchaseRepository
  }
}

describe('DbGetClientsByPurchaseValue', () => {
  test('Ensure calls GetClientByBiggerPurchaseRepository with correct values', async () => {
    const { sut, getClientByBiggerPurchaseRepository } = mockSut()
    const getSpy = jest.spyOn(getClientByBiggerPurchaseRepository, 'getClientByBiggerPurchase')
    await sut.getClientByBiggerPurchase()
    expect(getSpy).toHaveBeenCalled()
  })
  test('should throws if GetClientByBiggerPurchaseRepository throws', async () => {
    const { sut, getClientByBiggerPurchaseRepository } = mockSut()
    jest.spyOn(getClientByBiggerPurchaseRepository, 'getClientByBiggerPurchase').mockRejectedValueOnce(new Error())
    const promise = sut.getClientByBiggerPurchase()
    await expect(promise).rejects.toThrow()
  })
  test('should returns clients if succeds', async () => {
    const { sut } = mockSut()
    const value = await sut.getClientByBiggerPurchase()
    expect(value).toEqual(mockClientsTotal()[0])
  })
})
