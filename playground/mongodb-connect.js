// Identical code const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongodb');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  // if (err) {
  //   return console.log('Unable to insert', err);
  // }
  //
  // console.log(JSON.stringify(result.ops, undefined, 2));
  // db.collection('Todos').insertOne({
  //   text: 'Get some food',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert document', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  client.close();
});
