const ObjectID = require('mongodb').ObjectID

module.exports = {
  async up(db, client) {
    return db.collection('items').insertMany([{
      "_id": new ObjectID("6085f71af1d0cd2b71730285"),
      "productId": new ObjectID("6085ec2e7f506f256b13786c"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b24"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730286"),
      "productId": new ObjectID("6085ec2e7f506f256b13786d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b24"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730287"),
      "productId": new ObjectID("6085ec2e7f506f256b13786e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b25"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730288"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b25"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730289"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b25"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173028a"),
      "productId": new ObjectID("6085ec2e7f506f256b137871"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b26"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173028b"),
      "productId": new ObjectID("6085ec2e7f506f256b137872"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b26"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173028c"),
      "productId": new ObjectID("6085ec2e7f506f256b137873"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b26"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173028d"),
      "productId": new ObjectID("6085ec2e7f506f256b137874"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b26"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173028e"),
      "productId": new ObjectID("6085ec2e7f506f256b137875"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b27"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173028f"),
      "productId": new ObjectID("6085ec2e7f506f256b137876"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b27"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730290"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b27"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730291"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b28"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730292"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b28"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730293"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b29"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730294"),
      "productId": new ObjectID("6085ec2e7f506f256b13787a"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b29"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730295"),
      "productId": new ObjectID("6085ec2e7f506f256b13787b"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b29"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730296"),
      "productId": new ObjectID("6085ec2e7f506f256b13787c"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b29"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730297"),
      "productId": new ObjectID("6085ec2e7f506f256b13787d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2a"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730298"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2a"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b71730299"),
      "productId": new ObjectID("6085ec2e7f506f256b13787f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2a"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173029a"),
      "productId": new ObjectID("6085ec2e7f506f256b13787d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2b"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173029b"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2b"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173029c"),
      "productId": new ObjectID("6085ec2e7f506f256b13787d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2c"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173029d"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2c"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173029e"),
      "productId": new ObjectID("6085ec2e7f506f256b13787d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2d"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b7173029f"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2d"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a0"),
      "productId": new ObjectID("6085ec2e7f506f256b13787b"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2d"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a1"),
      "productId": new ObjectID("6085ec2e7f506f256b13787d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2e"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a2"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2e"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a3"),
      "productId": new ObjectID("6085ec2e7f506f256b13787b"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2e"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a4"),
      "productId": new ObjectID("6085ec2e7f506f256b13786c"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2e"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a5"),
      "productId": new ObjectID("6085ec2e7f506f256b13786d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2e"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a6"),
      "productId": new ObjectID("6085ec2e7f506f256b13787d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2f"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a7"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2f"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a8"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b2f"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302a9"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b30"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302aa"),
      "productId": new ObjectID("6085ec2e7f506f256b13787a"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b30"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ab"),
      "productId": new ObjectID("6085ec2e7f506f256b13787b"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b30"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ac"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b31"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ad"),
      "productId": new ObjectID("6085ec2e7f506f256b13787d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b31"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ae"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b31"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302af"),
      "productId": new ObjectID("6085ec2e7f506f256b13787d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b32"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b0"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b32"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b1"),
      "productId": new ObjectID("6085ec2e7f506f256b137876"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b32"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b2"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b32"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b3"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b33"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b4"),
      "productId": new ObjectID("6085ec2e7f506f256b137876"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b33"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b5"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b33"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b6"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b34"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b7"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b34"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b8"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b35"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302b9"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b35"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ba"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b35"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302bb"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b36"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302bc"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b36"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302bd"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b36"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302be"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b37"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302bf"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b37"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c0"),
      "productId": new ObjectID("6085ec2e7f506f256b13787d"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b37"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c1"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b37"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c2"),
      "productId": new ObjectID("6085ec2e7f506f256b13787b"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b37"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c3"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b38"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c4"),
      "productId": new ObjectID("6085ec2e7f506f256b13787a"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b38"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c5"),
      "productId": new ObjectID("6085ec2e7f506f256b13787b"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b38"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c6"),
      "productId": new ObjectID("6085ec2e7f506f256b13787c"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b38"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c7"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b39"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c8"),
      "productId": new ObjectID("6085ec2e7f506f256b13787a"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b39"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302c9"),
      "productId": new ObjectID("6085ec2e7f506f256b13787b"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b39"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ca"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3a"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302cb"),
      "productId": new ObjectID("6085ec2e7f506f256b13787a"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3a"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302cc"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3b"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302cd"),
      "productId": new ObjectID("6085ec2e7f506f256b13787a"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3b"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ce"),
      "productId": new ObjectID("6085ec2e7f506f256b137872"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3b"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302cf"),
      "productId": new ObjectID("6085ec2e7f506f256b137873"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3b"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d0"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3c"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d1"),
      "productId": new ObjectID("6085ec2e7f506f256b13787a"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3c"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d2"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3d"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d3"),
      "productId": new ObjectID("6085ec2e7f506f256b13787a"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3d"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d4"),
      "productId": new ObjectID("6085ec2e7f506f256b13787a"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3d"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d5"),
      "productId": new ObjectID("6085ec2e7f506f256b137876"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3e"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d6"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3e"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d7"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3e"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d8"),
      "productId": new ObjectID("6085ec2e7f506f256b137876"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3f"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302d9"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3f"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302da"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b3f"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302db"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b40"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302dc"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b40"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302dd"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b40"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302de"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b40"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302df"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b41"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e0"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b41"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e1"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b41"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e2"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b42"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e3"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b42"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e4"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b43"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e5"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b43"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e6"),
      "productId": new ObjectID("6085ec2e7f506f256b13787e"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b43"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e7"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b43"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e8"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b44"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302e9"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b44"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ea"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b44"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302eb"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b44"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ec"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b44"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ed"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b44"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ee"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b46"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302ef"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b46"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302f0"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b46"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302f1"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b46"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302f2"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b47"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302f3"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b47"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302f4"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b47"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302f5"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b48"),
    },{
      "_id": new ObjectID("6085f71af1d0cd2b717302f6"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b48"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b717302f7"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b49"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b717302f8"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b49"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b717302f9"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b49"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b717302fa"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4a"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b717302fb"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4a"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b717302fc"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4a"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b717302fd"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4a"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b717302fe"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4b"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b717302ff"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4b"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730300"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4b"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730301"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4c"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730302"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4c"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730303"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4d"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730304"),
      "productId": new ObjectID("6085ec2e7f506f256b137870"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4d"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730305"),
      "productId": new ObjectID("6085ec2e7f506f256b137879"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4d"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730306"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4e"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730307"),
      "productId": new ObjectID("6085ec2e7f506f256b13786f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4f"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730308"),
      "productId": new ObjectID("6085ec2e7f506f256b137877"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4f"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730309"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b4f"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b7173030a"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b50"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b7173030b"),
      "productId": new ObjectID("6085ec2e7f506f256b137878"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b51"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b7173030c"),
      "productId": new ObjectID("6085ec2e7f506f256b13787f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b51"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b7173030d"),
      "productId": new ObjectID("6085ec2e7f506f256b13787f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b52"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b7173030e"),
      "productId": new ObjectID("6085ec2e7f506f256b13787f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b53"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b7173030f"),
      "productId": new ObjectID("6085ec2e7f506f256b13787f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b53"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730310"),
      "productId": new ObjectID("6085ec2e7f506f256b13787f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b54"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730311"),
      "productId": new ObjectID("6085ec2e7f506f256b13787f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b54"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730312"),
      "productId": new ObjectID("6085ec2e7f506f256b137873"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b54"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730313"),
      "productId": new ObjectID("6085ec2e7f506f256b13787f"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b55"),
    },{
      "_id": new ObjectID("6085f71bf1d0cd2b71730314"),
      "productId": new ObjectID("6085ec2e7f506f256b137873"),
      "purchaseId": new ObjectID("6085d5e0f013d2171e436b55")
    }])
  },

  async down(db, client) {
    return db.dropCollection('items')
  }
};