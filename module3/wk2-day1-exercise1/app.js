var MongoClient = require('mongodb').MongoClient;

//nodemongo is the database name
var url = "mongodb://localhost:27017/nodemongo";

//connect to the db
MongoClient.connect(url, {
  useNewUrlParser: true, useUnifiedTopology: true
}, function(err, db){
  // if(err) throw err;
  // console.log("Database created!");
  // db.close();
  var dbo = db.db("nodemongo");

  //----- for single data -----
  // var custData = { name: "Westcliff Inc", address: "Irvine, CA"},

//----- for multiple data ------
//   var custData = [
//     { name: "John", address: "Highway 71"},
//     { name: "Peter", address: "Lowstreet 4" },
//     { name: "Amy", address: "Apple st 652" },
//     { name: "Hannah", address: "Mountain 21" },
//     { name: "Michael", address: "Valley 345" },
//     { name: "Sandy", address: "Ocean blvd 2" },
//     { name: "Betty", address: "Green Grass 1" },
//     { name: "Richard", address: "Sky st 331" },
//     { name: "Susan", address: "One way 98" },
//     { name: "Vicky", address: "Yellow Garden 2" },
//     { name: "Ben", address: "Park Lane 38" },
//     { name: "William", address: "Central st 954" },
//     { name: "Chuck", address: "Main Road 989" },
//     { name: "Viola", address: "Sideway 1633" },
// ];


//---- to update custData -----
  var myquery = { address: 'Valley 345' };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123"} };
  dbo.collection("customers").updateOne(myquery,newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  })



//---- to delete one custData -----
  // var myquery = { address: 'Mountain 21' };
  // dbo.collection("customers").deleteOne(myquery, function (err, obj) {
  //   if (err) throw err;
  //   console.log("1 document deleted");
  //   db.close();
  // })


//----- to sort the custData alphabetically based on name ----
  // var mysort = { name: 1 };
  // dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // })

//----- search based on custData address ----
// var query = {address: "Park Lane 38"};
// dbo.collection("customers").find(query).toArray(function(err, result) {
//   if(err) throw err;
//   console.log(result);
//   db.close();
// })

//------ Since we have already inserted many data, we can find certain custData -----
// dbo.collection("customers").findOne({}, function(err, result) {
//   if(err) throw err;
//   console.log(result.name);
//   db.close();
// })

//------ this is to insert many inputs of custData as an array ------
// dbo.collection("customers").insertMany(custData, function(err, res) {
//   if(err) throw err;
//   console.log("Number of documents inserted: " + res.insertedCount);
//   db.close();
// })



//----- this is to insert a single input on custData as an object ------
  // dbo.collection("customers").insertOne(custData, function(err, res) {
  //   if(err) throw err;
  //   console.log("Collection created!");
  //   console.log("1 dociment inserted");
  //   db.close();
  // })

  //----- this is to test if db is created ------
  // dbo.createCollection("customers", function(err, res) {
  //   console.log("Collection created!");
  //   db.close();
  // })
});
