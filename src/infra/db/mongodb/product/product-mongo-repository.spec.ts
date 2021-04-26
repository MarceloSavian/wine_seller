import { mongoHelper } from '../helpers/mongo-helper'
import { Collection } from 'mongodb'
import { mockProductModel } from '@/domain/test/mock-product'
import { ProductMongoRepository } from './product-mongo-repository'

type SutTypes = {
  sut: ProductMongoRepository
}

const mockSut = (): SutTypes => {
  return {
    sut: new ProductMongoRepository()
  }
}
async function insertProduct (): Promise<string> {
  const productsCollection = await mongoHelper.getCollection('products')
  const result = await productsCollection.insertOne(mockProductModel())
  return mongoHelper.map(result.ops[0]).id
}

describe('ProductMongoRepository', () => {
  let productCollection: Collection
  beforeAll(async () => {
    await mongoHelper.connect(String(process.env.MONGO_URL))
  })
  afterAll(async () => {
    await mongoHelper.disconnect()
  })
  beforeEach(async () => {
    productCollection = await mongoHelper.getCollection('products')
    await productCollection.deleteMany({})
  })
  test('Should return product', async () => {
    const { sut } = mockSut()
    await insertProduct()
    const result = await sut.getProductByFilter(
      mockProductModel().product,
      mockProductModel().variety,
      mockProductModel().country,
      mockProductModel().category,
      mockProductModel().harvest
    )
    expect(result.id).toBeTruthy()
    expect(result.category).toEqual(mockProductModel().category)
    expect(result.country).toEqual(mockProductModel().country)
    expect(result.harvest).toEqual(mockProductModel().harvest)
    expect(result.price).toEqual(mockProductModel().price)
    expect(result.product).toEqual(mockProductModel().product)
    expect(result.variety).toEqual(mockProductModel().variety)
  })
  test('Should return product', async () => {
    const { sut } = mockSut()
    await insertProduct()
    const result = await sut.getProductByFilter()
    expect(result.id).toBeTruthy()
    expect(result.category).toEqual(mockProductModel().category)
    expect(result.country).toEqual(mockProductModel().country)
    expect(result.harvest).toEqual(mockProductModel().harvest)
    expect(result.price).toEqual(mockProductModel().price)
    expect(result.product).toEqual(mockProductModel().product)
    expect(result.variety).toEqual(mockProductModel().variety)
  })
})
