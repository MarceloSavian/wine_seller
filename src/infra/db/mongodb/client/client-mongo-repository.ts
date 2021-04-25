import { GetClientsByPurchaseValueRepository } from '@/data/protocols/db/client/get-clients-by-purchase-value'
import { ClientTotal } from '@/domain/models/client'
import { mongoHelper } from '../helpers/mongo-helper'
import { QueryBuilder } from '../helpers/query-builder'

export class ClientMongoRepository implements GetClientsByPurchaseValueRepository {
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
}
