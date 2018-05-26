const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b094b71bb8add3bf0fb2b1e11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// } 

// Todo.find({
//     _id: id
// }).then((todos)=> {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todos)=> {
//     console.log('Todo', todos)
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//        return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
var id = '5b084bd61888e042a4e4ff0e';

User.findById(id).then((user) =>{
    if (!user) {
        return console.log('id not found')
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e)
});
