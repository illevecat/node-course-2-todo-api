var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//app function
var app = express();

//config
var port = 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    console.log('saved', doc);
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//get todos route
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e)
  });
});



//listen on port
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});


module.exports = {app};
