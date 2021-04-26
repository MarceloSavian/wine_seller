import { Product } from '@/domain/models/product'

export interface GetClientWineAdvice {
  getWineAdvice: (id: string) => Promise<Product>
}
