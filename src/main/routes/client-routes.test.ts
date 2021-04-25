import { Collection } from 'mongodb'
import request from 'supertest'
import { mongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'

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

describe('Client routes', () => {
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
  describe('GET /client/byPurchaseValue', () => {
    test('Should return 200 on client', async () => {
      const id1 = await insertClient()
      await insertPurchase(id1)
      await insertPurchase(id1)
      await insertPurchase(id1)
      const id2 = await insertClient()
      await insertPurchase(id2)
      await insertPurchase(id2)
      const id3 = await insertClient()
      await insertPurchase(id3)
      await request(app)
        .get('/api/client/byPurchaseValue')
        .expect(200)
    })
  })
})
