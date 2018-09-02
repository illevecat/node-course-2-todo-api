var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//connect to local database TodoApp
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};
