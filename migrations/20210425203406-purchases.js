const ObjectID = require('mongodb').ObjectID

module.exports = {
  async up(db, client) {
    return db.collection('purchases').insertMany([{
      "_id": new ObjectID("6085d5e0f013d2171e436b24"),
      "date": new Date(2016,1,19),
      "clientId": new ObjectID("6085d12f49d5ff146cb75916"),
      "total": 158
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b25"),
      "date": new Date(2015,9,22),
      "clientId": new ObjectID("6085d12f49d5ff146cb75917"),
      "total": 278
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b26"),
      "date": new Date(2014,8,20),
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 297.7
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b27"),
      "date": new Date(2016,11,4),
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 208
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b28"),
      "date": new Date(2015,4,8),
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 155
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b29"),
      "date": new Date(2016,9,10),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 566
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2a"),
      "date": new Date(2014,4,8),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591b"),
      "total": 622.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2b"),
      "date": new Date(2016,9,7),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 324.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2c"),
      "date": new Date(2016,10,8),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591e"),
      "total": 324.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2d"),
      "date": new Date(2015,6,12),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591f"),
      "total": 428.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2e"),
      "date": new Date(2015,1,7),
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 640.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2f"),
      "date": new Date(2016,7,8),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 265.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b30"),
      "date": new Date(2016,5,15),
      "clientId": new ObjectID("6085d12f49d5ff146cb75917"),
      "total": 418
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b31"),
      "date": new Date(2015,7,17),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591e"),
      "total": 444.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b32"),
      "date": new Date(2016,4,11),
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 434.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b33"),
      "date": new Date(2016,4,10),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 368
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b34"),
      "date": new Date(2016,6,08),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 313
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b35"),
      "date": new Date(2016,6,04),
      "clientId": new ObjectID("6085d12f49d5ff146cb75916"),
      "total": 571
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b36"),
      "date": new Date(2016,5,3),
      "clientId": new ObjectID("6085d12f49d5ff146cb75917"),
      "total": 423
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b37"),
      "date": new Date(2016,5,1),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 647.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b38"),
      "date": new Date(2016,9,2),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 566
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b39"),
      "date": new Date(2016,8,4),
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 408
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3a"),
      "date": new Date(2015,12,7),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 250
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3b"),
      "date": new Date(2016,7,15),
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 369.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3c"),
      "date": new Date(2016,3,11),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 250
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3d"),
      "date": new Date(2016,3,2),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 390
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3e"),
      "date": new Date(2016,5,10),
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 230
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3f"),
      "date": new Date(2016,6,8),
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 368
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b40"),
      "date": new Date(2016,7,10),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 512
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b41"),
      "date": new Date(2016,5,28),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591b"),
      "total": 443
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b42"),
      "date": new Date(2016,6,18),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 175
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b43"),
      "date": new Date(2016,6,18),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 488
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b44"),
      "date": new Date(2016,6,18),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 230
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b45"),
      "date": new Date(2016,6,18),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 230
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b46"),
      "date": new Date(2016,7,22),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591f"),
      "total": 350
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b47"),
      "date": new Date(2016,8,15),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 230
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b48"),
      "date": new Date(2016,10,15),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591e"),
      "total": 110
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b49"),
      "date": new Date(2016,10,10),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591b"),
      "total": 189
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4a"),
      "date": new Date(2016,10,12),
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 309
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4b"),
      "date": new Date(2016,9,14),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 254
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4c"),
      "date": new Date(2016,9,7),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591f"),
      "total": 199
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4d"),
      "date": new Date(2016,6,11),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 309
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4e"),
      "date": new Date(2016,7,15),
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 79
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4f"),
      "date": new Date(2016,4,5),
      "clientId": new ObjectID("6085d12f49d5ff146cb75917"),
      "total": 189
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b50"),
      "date": new Date(2016,7,6),
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 55
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b51"),
      "date": new Date(2016,4,18),
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 353
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b52"),
      "date": new Date(2016,5,17),
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 298
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b53"),
      "date": new Date(2016,7,11),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 596
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b54"),
      "date": new Date(2016,8,17),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591b"),
      "total": 655.9
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b55"),
      "date": new Date(2016,11,3),
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 357.9
    }])
  },

  async down(db, client) {
    return db.dropCollection('purchases')
  }
};
