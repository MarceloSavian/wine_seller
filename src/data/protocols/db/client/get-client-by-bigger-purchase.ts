import { ClientTotal } from '@/domain/models/client'

export interface GetClientByBiggerPurchaseRepository {
  getClientByBiggerPurchase: () => Promise<ClientTotal | null>
}
