import { clientByPurchaseValuePath, clientByBiggerPurchasePath, clientByMostBuyersPath, clientWineAdvicePath } from './paths/client-paths'
import { badRequest } from './components/bad-request'
import { serverError } from './components/server-error'
import { errorSchema } from './schemas/error-schema'
import { clientSchema, clientsSchema } from './schemas/client-schema'
import { productSchema } from './schemas/product-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'API Loja de vinhos',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  tags: [{
    name: 'Client'
  }],
  servers: [{
    url: '/api'
  }],
  paths: {
    '/client/byPurchaseValue': clientByPurchaseValuePath,
    '/client/byBiggerPurchase': clientByBiggerPurchasePath,
    '/client/mostBuyers': clientByMostBuyersPath,
    '/client/{clientId}/wineAdvice': clientWineAdvicePath
  },
  schemas: {
    error: errorSchema,
    client: clientSchema,
    clients: clientsSchema,
    product: productSchema
  },
  components: {
    badRequest,
    serverError
  }
}
