import { ClientTotal } from '@/domain/models/client'

export interface GetMostBuyerClient {
  getMostBuyerClient: () => Promise<ClientTotal | null>
}
