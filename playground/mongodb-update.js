const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server', db);
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b081ebd340092a525b323e4') 
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b0839dbf03d5d38078fe08e')
    }, {
        $set: {
            name: 'jen'
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
});