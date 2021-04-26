import { ClientTotal } from '@/domain/models/client'

export interface GetClientByBiggerPurchase {
  getClientByBiggerPurchase: () => Promise<ClientTotal | null>
}
