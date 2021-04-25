import { Client, ClientTotal } from '../models/client'

export const mockClientModel = (): Client => ({
  id: 'any_id',
  name: 'any_name',
  cpf: 'any_cpf'
})

export const mockClientsTotal = (): ClientTotal[] => ([{
  ...mockClientModel(),
  total: 500
}])
