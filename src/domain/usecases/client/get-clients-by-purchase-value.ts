import { Client } from '@/domain/models/client'

export interface GetClientsByPurchaseValue {
  getByPurchaseValue: () => Promise<Client[] | null>
}
