import { Client } from '@/domain/models/client'

export interface GetMostBuyersClients {
  getMostBuyers: () => Promise<Client[] | null>
}
