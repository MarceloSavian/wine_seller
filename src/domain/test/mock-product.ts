import { Product } from '../models/product'

export const mockProductModel = (): Product => ({
  id: 'any_id',
  product: 'any_product',
  variety: 'any_variety',
  country: 'any_country',
  category: 'any_category',
  harvest: 'any_harvest',
  price: 70
})
