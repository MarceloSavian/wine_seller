export const clientSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    cpf: {
      type: 'string'
    },
    total: {
      type: 'number'
    },
    id: {
      type: 'string'
    }
  }
}

export const clientsSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/client'
  }
}
