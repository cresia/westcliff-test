const MongoClient = require('mongodb').MongoClient;

const url= 'mongodb://localhost:27017/westcliff';

MongoClient.connect(url, { useUnifiedTopology:true }, (err, client) => {
  if(err) {
    throw err;
  }
  console.log('db connected')
})
