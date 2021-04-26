import { GetProductByFilterRepository } from '@/data/protocols/db/product/get-product-by-filter'
import { Product } from '@/domain/models/product'
import { mongoHelper } from '../helpers/mongo-helper'
import { QueryBuilder } from '../helpers/query-builder'

export class ProductMongoRepository implements GetProductByFilterRepository {
  async getProductByFilter (
    product?: string,
    variety?: string,
    country?: string,
    category?: string,
    harvest?: string
  ): Promise<Product> {
    const productCollection = await mongoHelper.getCollection('products')

    let match = {}

    if (product) {
      match = {
        ...match,
        product
      }
    }

    if (variety) {
      match = {
        ...match,
        variety
      }
    }

    if (country) {
      match = {
        ...match,
        country
      }
    }

    if (category) {
      match = {
        ...match,
        category
      }
    }

    if (harvest) {
      match = {
        ...match,
        harvest
      }
    }

    const query = new QueryBuilder()
      .match(match)

    const result = (await productCollection.aggregate(query.build()).toArray())[0]
    return mongoHelper.map(result)
  }
}
