import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeClientByPurchaseValueController } from '../factories/controllers/client/get-client-by-purchase-value-factory'

export default (router: Router): void => {
  router.get('/client/byPurchaseValue', adaptRoute(makeClientByPurchaseValueController()))
}
