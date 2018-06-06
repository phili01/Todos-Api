const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'phi@g.co',
    password: 'abc123',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }, {
        _id: userTwoId,
        email: 'phiabc@g.co',
        password: 'abc123',
    }]
}]

const todos = [{
    _id: new ObjectID(),
    text: 'todo from postman'
}, {
    _id: new ObjectID(),
    text: 'second test todo',
    completed: true,
    completedAt: 333
}];


const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        done();
        return Todo.insertMany(todos);
    });
};

const populateUsers = () => {
     User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        
        return Promise.all([userOne, userTwo])
    });
};

module.exports = { todos, populateTodos, users, populateUsers};