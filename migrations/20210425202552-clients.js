const ObjectID = require('mongodb').ObjectID

module.exports = {
  async up(db, client) {
    return db.collection('clients').insertMany([
      {
        "_id": new ObjectID("6085d12f49d5ff146cb75916"),
        "name": "Vinicius",
        "cpf": "000.000.000-01"
      },
      {
        "_id": new ObjectID("6085d12f49d5ff146cb75917"),
        "name": "Marcos",
        "cpf": "000.000.000-02"
      },
      {
        "_id": new ObjectID("6085d12f49d5ff146cb75918"),
        "name": "Joel",
        "cpf": "000.000.000-03"
      },
      {
        "_id": new ObjectID("6085d12f49d5ff146cb75919"),
        "name": "Gustavo",
        "cpf": "000.000.000-04"
      },
      {
        "_id": new ObjectID("6085d12f49d5ff146cb7591a"),
        "name": "Raquel",
        "cpf": "000.000.000-05"
      },
      {
        "_id": new ObjectID("6085d12f49d5ff146cb7591b"),
        "name": "Pamela",
        "cpf": "000.000.000-06"
      },
      {
        "_id": new ObjectID("6085d12f49d5ff146cb7591c"),
        "name": "Bruno",
        "cpf": "000.000.000-07"
      },
      {
        "_id": new ObjectID("6085d12f49d5ff146cb7591d"),
        "name": "Jonathan",
        "cpf": "000.000.000-08"
      },
      {
        "_id": new ObjectID("6085d12f49d5ff146cb7591e"),
        "name": "Matheus",
        "cpf": "000.000.000-09"
      },
      {
        "_id": new ObjectID("6085d12f49d5ff146cb7591f"),
        "name": "Rafael",
        "cpf": "000.000.000-10"
      }
    ])
  },

  async down(db, client) {
    return db.dropCollection('clients')
  }
};
