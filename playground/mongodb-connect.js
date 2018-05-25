// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'andr', age: 25};
// var {name} = user;
// console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server', db);
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         throw new Error('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        _id: 125,
        name: 'phi',
        age: 25,
        location: 'philadaphia'
    }, (err, result) => {
        if (err) {
            console.log('Unable to insert into user', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});