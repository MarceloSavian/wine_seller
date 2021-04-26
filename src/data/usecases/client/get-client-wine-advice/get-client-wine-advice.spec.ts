import { GetClientProductsRepository } from '@/data/protocols/db/client/get-client-products'
import { GetProductByFilterRepository } from '@/data/protocols/db/product/get-product-by-filter'
import { mockGetClientProductsRepository } from '@/data/test/mock-db-client'
import { mockGetProductByFilterRepository } from '@/data/test/mock-db-product'
import { mockProductModel } from '@/domain/test/mock-product'
import { DbGetClientWineAdvice } from './get-client-wine-advice'

type SutTypes = {
  sut: DbGetClientWineAdvice
  getClientProductsRepositoryStub: GetClientProductsRepository
  getProductByFilterRepository: GetProductByFilterRepository
}

const mockSut = (): SutTypes => {
  const getClientProductsRepositoryStub = mockGetClientProductsRepository()
  const getProductByFilterRepository = mockGetProductByFilterRepository()
  return {
    sut: new DbGetClientWineAdvice(getClientProductsRepositoryStub, getProductByFilterRepository),
    getClientProductsRepositoryStub,
    getProductByFilterRepository
  }
}

describe('DbGetMostBuyerClient', () => {
  test('Ensure calls GetMostBuyerClientRepository with correct values', async () => {
    const { sut, getClientProductsRepositoryStub } = mockSut()
    const getSpy = jest.spyOn(getClientProductsRepositoryStub, 'getClientProducts')
    await sut.getWineAdvice('any_id')
    expect(getSpy).toHaveBeenCalled()
  })
  test('Ensure calls createRanking with correct values', async () => {
    const { sut } = mockSut()
    const getSpy = jest.spyOn(sut, 'createRanking')
    await sut.getWineAdvice('any_id')
    expect(getSpy).toHaveBeenCalledWith([mockProductModel()])
  })
  test('Ensure createRanking returns correct values', async () => {
    const { sut, getClientProductsRepositoryStub } = mockSut()
    jest.spyOn(getClientProductsRepositoryStub, 'getClientProducts').mockResolvedValueOnce([
      mockProductModel(),
      mockProductModel()
    ])
    const getSpy = jest.spyOn(sut, 'createRanking')
    await sut.getWineAdvice('any_id')
    expect(getSpy).toHaveReturnedWith([
      { score: 2, product: 'any_product' },
      { score: 2, variety: 'any_variety' },
      { score: 2, country: 'any_country' },
      { score: 2, category: 'any_category' },
      { score: 2, harvest: 'any_harvest' }
    ])
  })
  test('Ensure calls GetProductByFilterRepository if ranking length is 0', async () => {
    const { sut, getProductByFilterRepository } = mockSut()
    jest.spyOn(sut, 'createRanking').mockReturnValueOnce([])
    const getSpy = jest.spyOn(getProductByFilterRepository, 'getProductByFilter')
    await sut.getWineAdvice('any_id')
    expect(getSpy).toHaveBeenCalled()
  })
  test('Ensure calls GetProductByFilterRepository with correct value', async () => {
    const { sut, getProductByFilterRepository } = mockSut()
    jest.spyOn(sut, 'createRanking').mockReturnValueOnce([
      { score: 3, product: 'any_product' },
      { score: 2, variety: 'any_variety' },
      { score: 2, country: 'any_country' },
      { score: 2, category: 'any_category' },
      { score: 2, harvest: 'any_harvest' }
    ])
    const getSpy = jest.spyOn(getProductByFilterRepository, 'getProductByFilter')
    await sut.getWineAdvice('any_id')
    expect(getSpy).toHaveBeenCalledWith('any_product', undefined, undefined, undefined, undefined)
  })
  test('should throws if GetMostBuyerClientRepository throws', async () => {
    const { sut, getClientProductsRepositoryStub } = mockSut()
    jest.spyOn(getClientProductsRepositoryStub, 'getClientProducts').mockRejectedValueOnce(new Error())
    const promise = sut.getWineAdvice('any_id')
    await expect(promise).rejects.toThrow()
  })
  test('should returns clients if succeds', async () => {
    const { sut } = mockSut()
    const value = await sut.getWineAdvice('any_id')
    expect(value).toEqual(mockProductModel())
  })
})
