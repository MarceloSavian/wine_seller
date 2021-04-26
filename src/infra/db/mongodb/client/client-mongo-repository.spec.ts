import { mongoHelper } from '../helpers/mongo-helper'
import { ClientMongoRepository } from './client-mongo-repository'
import { Collection } from 'mongodb'

type SutTypes = {
  sut: ClientMongoRepository
}

const mockSut = (): SutTypes => {
  return {
    sut: new ClientMongoRepository()
  }
}

async function insertClient (): Promise<string> {
  const clientsCollection = await mongoHelper.getCollection('clients')
  const result = await clientsCollection.insertOne({ name: 'any_name', cpf: 'any_cpf' })
  return mongoHelper.map(result.ops[0]).id
}

async function insertPurchase (clientId: string, value?: number, date?: Date): Promise<string> {
  const purchaseCollection = await mongoHelper.getCollection('purchases')
  const result = await purchaseCollection.insertOne({ clientId, date: date ?? new Date(), total: value ?? 500 })
  return mongoHelper.map(result.ops[0]).id
}

describe('ClientMongoRepository', () => {
  let clientsCollection: Collection
  beforeAll(async () => {
    await mongoHelper.connect(String(process.env.MONGO_URL))
  })
  afterAll(async () => {
    await mongoHelper.disconnect()
  })
  beforeEach(async () => {
    clientsCollection = await mongoHelper.getCollection('clients')
    await clientsCollection.deleteMany({})
  })
  test('Should return ordened Clients', async () => {
    const { sut } = mockSut()
    const id1 = await insertClient()
    await insertPurchase(id1)
    await insertPurchase(id1)
    await insertPurchase(id1)
    const id2 = await insertClient()
    await insertPurchase(id2)
    await insertPurchase(id2)
    const id3 = await insertClient()
    await insertPurchase(id3)
    const result = await sut.getByPurchaseValue()
    expect(result[0].id).toEqual(id1)
    expect(result[1].id).toEqual(id2)
    expect(result[2].id).toEqual(id3)
  })
  test('Should return biggest purchase client', async () => {
    const { sut } = mockSut()
    const id1 = await insertClient()
    await insertPurchase(id1, 500, new Date(2016, 2, 22))
    await insertPurchase(id1, 500, new Date(2016, 2, 20))
    await insertPurchase(id1, 1500, new Date(2016, 2, 21))
    const id2 = await insertClient()
    await insertPurchase(id2, 2500, new Date(2017, 2, 5))
    await insertPurchase(id2, 500, new Date(2016, 2, 28))
    const id3 = await insertClient()
    await insertPurchase(id3, 500, new Date(2016, 2, 1))
    const result = await sut.getClientByBiggerPurchase()
    expect(result?.id).toEqual(id1)
    expect(result?.name).toBe('any_name')
    expect(result?.cpf).toBe('any_cpf')
    expect(result?.total).toBe(1500)
  })
  test('Should return most buyer client', async () => {
    const { sut } = mockSut()
    const id1 = await insertClient()
    await insertPurchase(id1, 500, new Date(2016, 2, 22))
    await insertPurchase(id1, 500, new Date(2016, 2, 20))
    await insertPurchase(id1, 1500, new Date(2016, 2, 21))
    const id2 = await insertClient()
    await insertPurchase(id2, 2500, new Date(2017, 2, 5))
    await insertPurchase(id2, 500, new Date(2016, 2, 28))
    const id3 = await insertClient()
    await insertPurchase(id3, 500, new Date(2016, 2, 1))
    const result = await sut.getMostBuyerClient()
    expect(result[0].id).toEqual(id1)
    expect(result[0].name).toBe('any_name')
    expect(result[0].cpf).toBe('any_cpf')
    expect(result[0].total).toBe(3)
    expect(result[1].total).toBe(2)
    expect(result[2].total).toBe(1)
  })
})
