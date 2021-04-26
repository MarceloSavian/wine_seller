export const productSchema = {
  type: 'object',
  properties: {
    product: {
      type: 'string'
    },
    variety: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    harvest: {
      type: 'string'
    },
    price: {
      type: 'number'
    },
    id: {
      type: 'string'
    }
  }
}
