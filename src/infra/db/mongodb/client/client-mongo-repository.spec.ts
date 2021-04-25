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

async function insertPurchase (clientId: string): Promise<string> {
  const purchaseCollection = await mongoHelper.getCollection('purchases')
  const result = await purchaseCollection.insertOne({ clientId, date: new Date(), total: 500 })
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
})
