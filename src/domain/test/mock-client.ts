import { Client } from '../models/client'

export const mockClientModel = (): Client => ({
  id: 'any_id',
  name: 'any_name',
  cpf: 'any_cpf'
})

export const mockClients = (): Client[] => ([mockClientModel()])
