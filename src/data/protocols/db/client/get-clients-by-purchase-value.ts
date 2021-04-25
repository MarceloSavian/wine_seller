import { ClientTotal } from '@/domain/models/client'

export interface GetClientsByPurchaseValueRepository {
  getByPurchaseValue: () => Promise<ClientTotal[]>
}
