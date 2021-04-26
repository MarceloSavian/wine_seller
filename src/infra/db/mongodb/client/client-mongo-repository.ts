import { GetClientByBiggerPurchaseRepository } from '@/data/protocols/db/client/get-client-by-bigger-purchase'
import { GetClientProductsRepository } from '@/data/protocols/db/client/get-client-products'
import { GetClientsByPurchaseValueRepository } from '@/data/protocols/db/client/get-clients-by-purchase-value'
import { GetMostBuyerClientRepository } from '@/data/protocols/db/client/get-most-buyer-client'
import { ClientTotal } from '@/domain/models/client'
import { Product } from '@/domain/models/product'
import { ObjectId } from 'bson'
import { mongoHelper } from '../helpers/mongo-helper'
import { QueryBuilder } from '../helpers/query-builder'

export class ClientMongoRepository implements GetClientsByPurchaseValueRepository,
  GetClientByBiggerPurchaseRepository, GetMostBuyerClientRepository, GetClientProductsRepository {
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

  async getMostBuyerClient (): Promise<ClientTotal[]> {
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
        total: { $sum: 1 }
      })
      .sort({ total: -1 })
    const result = await purchaseCollection.aggregate(query.build()).toArray()
    return mongoHelper.mapCollection(result)
  }

  async getClientProducts (id: string): Promise<Product[]> {
    const purchaseCollection = await mongoHelper.getCollection('clients')
    const query = new QueryBuilder()
      .match({
        _id: new ObjectId(id)
      })
      .lookup({
        from: 'purchases',
        localField: '_id',
        foreignField: 'clientId',
        as: 'purchases'
      })
      .unwind({ path: '$purchases' })
      .lookup({
        from: 'items',
        localField: 'purchases._id',
        foreignField: 'purchaseId',
        as: 'items'
      })
      .unwind({ path: '$items' })
      .lookup({
        from: 'products',
        localField: 'items.productId',
        foreignField: '_id',
        as: 'products'
      })
      .unwind({ path: '$products' })
      .project({
        _id: '$products._id',
        product: '$products.product',
        variety: '$products.variety',
        country: '$products.country',
        category: '$products.category',
        harvest: '$products.harvest',
        price: '$products.price'
      })

    const result = await purchaseCollection.aggregate(query.build()).toArray()
    return mongoHelper.mapCollection(result)
  }
}
