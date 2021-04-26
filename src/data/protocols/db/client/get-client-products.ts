import { Product } from '@/domain/models/product'

export interface GetClientProductsRepository {
  getClientProducts: (id: string) => Promise<Product[]>
}
