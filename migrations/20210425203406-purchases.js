const ObjectID = require('mongodb').ObjectID

module.exports = {
  async up(db, client) {
    return db.collection('purchases').insertMany([{
      "_id": new ObjectID("6085d5e0f013d2171e436b24"),
      "date": "19-02-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75916"),
      "total": 158
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b25"),
      "date": "22-10-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb75917"),
      "total": 278
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b26"),
      "date": "20-08-2014",
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 297.7
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b27"),
      "date": "04-12-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 208
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b28"),
      "date": "08-05-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 155
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b29"),
      "date": "10-10-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 566
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2a"),
      "date": "08-05-2014",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591b"),
      "total": 622.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2b"),
      "date": "07-10-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 324.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2c"),
      "date": "08-11-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591e"),
      "total": 324.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2d"),
      "date": "12-07-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591f"),
      "total": 428.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2e"),
      "date": "07-02-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 640.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b2f"),
      "date": "08-08-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 265.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b30"),
      "date": "15-06-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75917"),
      "total": 418
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b31"),
      "date": "17-08-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591e"),
      "total": 444.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b32"),
      "date": "11-04-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 434.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b33"),
      "date": "10-04-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 368
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b34"),
      "date": "08-06-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 313
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b35"),
      "date": "04-07-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75916"),
      "total": 571
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b36"),
      "date": "03-06-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75917"),
      "total": 423
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b37"),
      "date": "01-06-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 647.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b38"),
      "date": "02-10-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 566
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b39"),
      "date": "04-08-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 408
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3a"),
      "date": "07-12-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 250
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3b"),
      "date": "15-07-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 369.8
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3c"),
      "date": "11-03-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 250
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3d"),
      "date": "02-04-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 390
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3e"),
      "date": "10-06-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 230
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b3f"),
      "date": "08-07-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 368
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b40"),
      "date": "10-08-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591c"),
      "total": 512
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b41"),
      "date": "28-06-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591b"),
      "total": 443
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b42"),
      "date": "18-07-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 175
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b43"),
      "date": "18-07-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 488
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b44"),
      "date": "18-07-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 230
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b45"),
      "date": "18-07-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 230
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b46"),
      "date": "22-08-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591f"),
      "total": 350
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b47"),
      "date": "15-09-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 230
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b48"),
      "date": "15-11-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591e"),
      "total": 110
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b49"),
      "date": "10-11-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591b"),
      "total": 189
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4a"),
      "date": "12-11-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 309
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4b"),
      "date": "14-10-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591a"),
      "total": 254
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4c"),
      "date": "07-10-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591f"),
      "total": 199
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4d"),
      "date": "11-07-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 309
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4e"),
      "date": "15-08-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb75918"),
      "total": 79
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b4f"),
      "date": "05-05-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb75917"),
      "total": 189
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b50"),
      "date": "06-08-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 55
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b51"),
      "date": "18-05-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 353
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b52"),
      "date": "17-06-2015",
      "clientId": new ObjectID("6085d12f49d5ff146cb75919"),
      "total": 298
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b53"),
      "date": "11-08-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 596
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b54"),
      "date": "17-09-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591b"),
      "total": 655.9
    },{
      "_id": new ObjectID("6085d5e0f013d2171e436b55"),
      "date": "03-11-2016",
      "clientId": new ObjectID("6085d12f49d5ff146cb7591d"),
      "total": 357.9
    }])
  },

  async down(db, client) {
    return db.dropCollection('purchases')
  }
};
