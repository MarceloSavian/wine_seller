import { ClientTotal } from '@/domain/models/client'

export interface GetMostBuyerClientRepository {
  getMostBuyerClient: () => Promise<ClientTotal[]>
}
