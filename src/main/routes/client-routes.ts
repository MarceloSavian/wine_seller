import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeClientByBiggerPurchaseController } from '../factories/controllers/client/get-client-by-bigger-purchase'
import { makeClientByPurchaseValueController } from '../factories/controllers/client/get-client-by-purchase-value-factory'
import { makeGetMostBuyerClientsController } from '../factories/controllers/client/get-most-buyers-clients'

export default (router: Router): void => {
  router.get('/client/byPurchaseValue', adaptRoute(makeClientByPurchaseValueController()))
  router.get('/client/byBiggerPurchase', adaptRoute(makeClientByBiggerPurchaseController()))
  router.get('/client/mostBuyers', adaptRoute(makeGetMostBuyerClientsController()))
}
