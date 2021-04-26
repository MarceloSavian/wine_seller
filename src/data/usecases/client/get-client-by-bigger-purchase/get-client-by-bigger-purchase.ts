import { GetClientByBiggerPurchaseRepository } from '@/data/protocols/db/client/get-client-by-bigger-purchase'
import { ClientTotal } from '@/domain/models/client'
import { GetClientByBiggerPurchase } from '@/domain/usecases/client/get-client-by-bigger-purchase'

export class DbGetClientByBiggerPurchase implements GetClientByBiggerPurchase {
  constructor (
    private readonly getClientByBiggerPurchaseRepository: GetClientByBiggerPurchaseRepository
  ) {}

  async getClientByBiggerPurchase (): Promise<ClientTotal | null> {
    return await this.getClientByBiggerPurchaseRepository.getClientByBiggerPurchase()
  }
}
