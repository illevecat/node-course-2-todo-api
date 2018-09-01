// Identical code const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongodb');
  const db = client.db('TodoApp')
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b89cb826d4445823f8f671a')
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });
  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Ander'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  })

  client.close();
});
