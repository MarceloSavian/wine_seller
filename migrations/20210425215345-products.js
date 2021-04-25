const ObjectID = require('mongodb').ObjectID

module.exports = {
  async up(db, client) {
    return db.collection('products').insertMany([{
      "_id": new ObjectID("6085ec2e7f506f256b13786c"),
      "product": "Casa Silva Reserva",
      "variety": "Cabernet Sauvignon",
      "country": "Chile",
      "category": "Tinto",
      "harvest": "2014",
      "price": 79
    },{
      "_id": new ObjectID("6085ec2e7f506f256b13786d"),
      "product": "Casa Silva Reserva",
      "variety": "Carménère",
      "country": "Chile",
      "category": "Tinto",
      "harvest": "2014",
      "price": 79
    },{
      "_id": new ObjectID("6085ec2e7f506f256b13786e"),
      "product": "Casa Silva Reserva",
      "variety": "Chardonnay",
      "country": "Chile",
      "category": "Branco",
      "harvest": "2016",
      "price": 79
    },{
      "_id": new ObjectID("6085ec2e7f506f256b13786f"),
      "product": "Casa Silva Reserva",
      "variety": "Sauvignon Blanc",
      "country": "Chile",
      "category": "Branco",
      "harvest": "2015",
      "price": 79
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137870"),
      "product": "Casa Silva Gran Reserva",
      "variety": "Petit Verdot",
      "country": "Chile",
      "category": "Tinto",
      "harvest": "2009",
      "price": 120
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137871"),
      "product": "Casa Silva Gran Reserva",
      "variety": "Syrah",
      "country": "Chile",
      "category": "Tinto",
      "harvest": "2009",
      "price": 120
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137872"),
      "product": "Punto Final Etiqueta Negra",
      "variety": "Malbec",
      "country": "Argentina",
      "category": "Tinto",
      "harvest": "2012",
      "price": 59.9
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137873"),
      "product": "Punto Final",
      "variety": "Sauvignon Blanc",
      "country": "Argentina",
      "category": "Branco",
      "harvest": "2015",
      "price": 59.9
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137874"),
      "product": "Punto Final",
      "variety": "Malbec",
      "country": "Argentina",
      "category": "Rosé",
      "harvest": "2016",
      "price": 59.9
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137875"),
      "product": "Punto Final Etiqueta Branca",
      "variety": "Malbec",
      "country": "Argentina",
      "category": "Tinto",
      "harvest": "2010",
      "price": 98
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137876"),
      "product": "Casa Valduga Raízes",
      "variety": "Cabernet Sauvignon",
      "country": "Brasil",
      "category": "Tinto",
      "harvest": "2013",
      "price": 55
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137877"),
      "product": "Casa Valduga Raízes",
      "variety": "Merlot",
      "country": "Brasil",
      "category": "Tinto",
      "harvest": "2013",
      "price": 55
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137878"),
      "product": "Casa Valduga Raízes",
      "variety": "Chardonnay",
      "country": "Brasil",
      "category": "Branco",
      "harvest": "2013",
      "price": 55
    },{
      "_id": new ObjectID("6085ec2e7f506f256b137879"),
      "product": "Casa Valduga Gran Reserva",
      "variety": "Chardonnay",
      "country": "Brasil",
      "category": "Branco",
      "harvest": "2009",
      "price": 110
    },{
      "_id": new ObjectID("6085ec2e7f506f256b13787a"),
      "product": "Casa Valduga Villa Lobos",
      "variety": "Cabernet Sauvignon",
      "country": "Brasil",
      "category": "Tinto",
      "harvest": "2007",
      "price": 140
    },{
      "_id": new ObjectID("6085ec2e7f506f256b13787b"),
      "product": "Finca La Emperatriz Crianza",
      "variety": "Tempranillo",
      "country": "Espanha",
      "category": "Tinto",
      "harvest": "2008",
      "price": 158
    },{
      "_id": new ObjectID("6085ec2e7f506f256b13787c"),
      "product": "Maius Priorat",
      "variety": "Garnacha",
      "country": "Espanha",
      "category": "Tinto",
      "harvest": "2008",
      "price": 158
    },{
      "_id": new ObjectID("6085ec2e7f506f256b13787d"),
      "product": "Avondale",
      "variety": "Muscat de Frontignon",
      "country": "Africa do Sul",
      "category": "Rosé",
      "harvest": "2010",
      "price": 66.8
    },{
      "_id": new ObjectID("6085ec2e7f506f256b13787e"),
      "product": "Wente Reliz Creek Pinot Noir",
      "variety": "Pinot Noir",
      "country": "EUA",
      "category": "Tinto",
      "harvest": "2012",
      "price": 258
    },{
      "_id": new ObjectID("6085ec2e7f506f256b13787f"),
      "product": "Saint Emilion Château La Clide Gran Cru",
      "variety": "Merlot",
      "country": "França",
      "category": "Tinto",
      "harvest": "2009",
      "price": 298
    }])
  },

  async down(db, client) {
    return db.dropCollection('products')
  }
};
