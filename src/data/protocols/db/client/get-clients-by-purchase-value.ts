import { Client } from '@/domain/models/client'

export interface GetClientsByPurchaseValueRepository {
  getByPurchaseValue: () => Promise<Client[] | null>
}
