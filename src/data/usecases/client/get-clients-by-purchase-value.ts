import { GetClientsByPurchaseValueRepository } from '@/data/protocols/db/client/get-clients-by-purchase-value'
import { Client } from '@/domain/models/client'
import { GetClientsByPurchaseValue } from '@/domain/usecases/client/get-clients-by-purchase-value'

export class DbGetClientsByPurchaseValue implements GetClientsByPurchaseValue {
  constructor (
    private readonly getClientsByPurchaseValueRepository: GetClientsByPurchaseValueRepository
  ) {}

  async getByPurchaseValue (): Promise<Client[] | null> {
    return await this.getClientsByPurchaseValueRepository.getByPurchaseValue()
  }
}
