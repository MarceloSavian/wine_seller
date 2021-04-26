export const clientByPurchaseValuePath = {
  get: {
    tags: ['Client'],
    summary: 'Retorna clientes ordenados pelo maior valor total em compras',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/clients'
            }
          }
        }
      },
      204: {
        description: 'No Content'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}

export const clientByBiggerPurchasePath = {
  get: {
    tags: ['Client'],
    summary: 'Retorna o cliente com a maior compra unica em 2016',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/client'
            }
          }
        }
      },
      204: {
        description: 'No Content'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}

export const clientByMostBuyersPath = {
  get: {
    tags: ['Client'],
    summary: 'Retorna os clientes ordenados pelo numero de compras',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/clients'
            }
          }
        }
      },
      204: {
        description: 'No Content'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}

export const clientWineAdvicePath = {
  get: {
    tags: ['Client'],
    summary: 'Retorna uma recomendação de vinho para o cliente (Verifique um clientId em /client/byPurchaseValue)',
    parameters: [{
      in: 'path',
      name: 'clientId',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/product'
            }
          }
        }
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
