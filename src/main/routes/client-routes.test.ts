import { Collection } from 'mongodb'
import request from 'supertest'
import { mongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'

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
  describe('GET /client/byBiggerPurchase', () => {
    test('Should return 200 on client', async () => {
      const id1 = await insertClient()
      await insertPurchase(id1, 500, new Date(2016, 2, 22))
      await insertPurchase(id1, 500, new Date(2016, 2, 20))
      await insertPurchase(id1, 1500, new Date(2016, 2, 21))
      const id2 = await insertClient()
      await insertPurchase(id2, 2500, new Date(2017, 2, 5))
      await insertPurchase(id2, 500, new Date(2016, 2, 28))
      const id3 = await insertClient()
      await insertPurchase(id3, 500, new Date(2016, 2, 1))
      await request(app)
        .get('/api/client/byBiggerPurchase')
        .expect(200)
    })
  })
  describe('GET /client/mostBuyers', () => {
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
        .get('/api/client/mostBuyers')
        .expect(200)
    })
  })
})
