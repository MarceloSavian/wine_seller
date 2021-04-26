import { GetClientByBiggerPurchaseRepository } from '@/data/protocols/db/client/get-client-by-bigger-purchase'
import { GetClientsByPurchaseValueRepository } from '@/data/protocols/db/client/get-clients-by-purchase-value'
import { ClientTotal } from '@/domain/models/client'
import { mongoHelper } from '../helpers/mongo-helper'
import { QueryBuilder } from '../helpers/query-builder'

export class ClientMongoRepository implements GetClientsByPurchaseValueRepository, GetClientByBiggerPurchaseRepository {
  async getByPurchaseValue (): Promise<ClientTotal[]> {
    const purchaseCollection = await mongoHelper.getCollection('clients')
    const query = new QueryBuilder()
      .lookup({
        from: 'purchases',
        localField: '_id',
        foreignField: 'clientId',
        as: 'purchases'
      })
      .unwind({ path: '$purchases' })
      .group({
        _id: '$_id',
        name: { $first: '$name' },
        cpf: { $first: '$cpf' },
        total: { $sum: '$purchases.total' }
      })
      .sort({ total: -1 })
    const result = await purchaseCollection.aggregate(query.build()).toArray()
    return mongoHelper.mapCollection(result)
  }

  async getClientByBiggerPurchase (): Promise<ClientTotal | null> {
    const purchaseCollection = await mongoHelper.getCollection('clients')
    const query = new QueryBuilder()
      .lookup({
        from: 'purchases',
        localField: '_id',
        foreignField: 'clientId',
        as: 'purchases'
      })
      .unwind({ path: '$purchases' })
      .match({
        'purchases.date': {
          $gte: new Date('2016-01-01T00:00:00.000Z'),
          $lte: new Date('2016-12-31T00:00:00.000Z')
        }
      })
      .sort({ 'purchases.total': -1 })
      .project({
        _id: 1,
        name: 1,
        cpf: 1,
        total: '$purchases.total'
      })
      .limit(1)
    const result = (await purchaseCollection.aggregate(query.build()).toArray())[0]
    return mongoHelper.map(result)
  }
}
