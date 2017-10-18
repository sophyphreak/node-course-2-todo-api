const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '59e76cfabc75a1c1ef7d82e3'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('59e76cfabc75a1c1ef7d82e3').then((todo) => {
  console.log(todo);
})
