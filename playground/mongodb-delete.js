// Identical code const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongodb');
  const db = client.db('TodoApp')

  //deleteMany
  db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result);
  });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: ObjectID('5b8a333b6d4445823f8f6c43')}).then((result) => {
    console.log(result);
  })

  client.close();
});
