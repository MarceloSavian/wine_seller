import { Product } from '@/domain/models/product'

export interface GetProductByFilterRepository {
  getProductByFilter: (
    product?: string,
    variety?: string,
    country?: string,
    category?: string,
    harvest?: string
  ) => Promise<Product>
}
