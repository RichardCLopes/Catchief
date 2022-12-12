let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/mydb";
let MONGO_CONFIG = { useUnifiedTopology: true, useNewUrlParser: true };
MongoClient.connect(url, MONGO_CONFIG, function (err, db) {
  if (err) throw err;
  console.log("Base de dados criada");
  db.close();
});

MongoClient.connect(url, MONGO_CONFIG, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo
    .collection("clientes")
    .insertOne({ nome: "alisson" }, function (err, result) {
      if (err) throw err;
      console.log(result.insertedCount);
      db.close();
    });
});

MongoClient.connect(url, MONGO_CONFIG, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo
    .collection("clientes")
    .findOne({ nome: "alisson" }, function (err, result) {
      if (err) throw err;
      console.log(result.nome);
      db.close();
    });
})

