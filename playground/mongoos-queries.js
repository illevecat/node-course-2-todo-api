const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

var id = '5b8a42986c5bb354fa40bed2';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id is not valid');
// };

// //Finding all documents
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
//
// //Finding one document if you have something other than id
// Todo.findOne({
//   _id: id
// }).then((todo) => {5b8a42986c5bb354fa40bed2
//   console.log('Todo', todo);
// });


//Finding single document specifically by id
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5b8a42986c5bb354fa40bed2').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) =>{
  console.log(e);
});
