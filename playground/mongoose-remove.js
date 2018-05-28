const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

Todo.findOneAndRemove({_id: '5b0bfed05afd900c7ce6644e'}).then((todo) => {
    
})

Todo.findByIdAndRemove('5b0bfed05afd900c7ce6644e').then((todo) => {
    console.log(todo);
});