var stats = [
    {
        'city': 'San Juan',
        'zip': '00926',
        'state': 'PR',
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona',
        'zip': '11368',
        'state': 'NY',
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago',
        'zip': '60629',
        'state': 'IL',
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso',
        'zip': '79936',
        'state': 'TX',
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles',
        'zip': '90011',
        'state': 'CA',
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk',
        'zip': '90650',
        'state': 'CA',
        'income': '66453',
        'age': '35'
    }
]

//----- create database ------
var MongoClient = require('mongodb').MongoClient;

//--- statsdb is the database name
var url = "mongodb://localhost:27017/statsdb";

//---- connect to db
MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, function (err, db) {
    // if(err) throw err;
    // console.log("Database created!");
    // db.close();

    //---- add collection/table to database -----
    var dbo = db.db('statsdb');

    dbo.collection("uscensus").drop();
    db.close();


    //---- create collection name: uscensus -----
    // dbo.createCollection("uscensus", function (err, res) {
    //     if (err) throw err;
    //     console.log("Collection created");
    //     db.close();
    // });


    //---- insert stats to the table/collection: uscensus ------
    // dbo.collection("uscensus").insertMany(stats, function (err, res) {
    //     if (err) throw err;
    //     console.log(res);
    // });


    //----- insert two new data to the table/collection: uscensus
    // dbo.collection("uscensus").insertMany([{ "city": "Pacoima", "zip": 91331, "state": "CA", "income": 60360, "age": 33},
    // { "city": "Ketchikan", "zip": 99950, "state": "AK", "income": 00000, "age": 00}], (err, res) =>{
    //     if (err) throw err;
    //     console.log(res);
    // });


    //---- find the zip code for Corona, NY -----
    // var query = { city: "Corona", state: "NY"};
    // dbo.collection("uscensus").find(query).toArray(function(err, result) {
    // if(err) throw err;
    // console.log(result[1].zip);
    // db.close();
    // })



    //---- find the income for all cities in California -----
    // var query = { state: "CA"};
    // dbo.collection("uscensus").find(query).toArray(function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // })

    // //---- update Alaska for income: 38910 and age: 46 -------
    // var query = { state: "AK"};
    // var newValue = { $set: {income: "38910", age: "46"}}
    // dbo.collection("uscensus").find(query).toArray(function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // })


    //---- sort in asceding order -----
    // var queryAsc = { state: 1  };
    // dbo.collection("uscensus").find().sort(queryAsc).toArray(function (err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // })

});
