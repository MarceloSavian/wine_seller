import { ClientTotal } from '@/domain/models/client'

export interface GetClientsByPurchaseValue {
  getByPurchaseValue: () => Promise<ClientTotal[]>
}
