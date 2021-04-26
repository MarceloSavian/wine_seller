import { GetClientsByPurchaseValueRepository } from '@/data/protocols/db/client/get-clients-by-purchase-value'
import { ClientTotal } from '@/domain/models/client'
import { GetClientsByPurchaseValue } from '@/domain/usecases/client/get-clients-by-purchase-value'

export class DbGetClientsByPurchaseValue implements GetClientsByPurchaseValue {
  constructor (
    private readonly getClientsByPurchaseValueRepository: GetClientsByPurchaseValueRepository
  ) {}

  async getByPurchaseValue (): Promise<ClientTotal[]> {
    return await this.getClientsByPurchaseValueRepository.getByPurchaseValue()
  }
}
