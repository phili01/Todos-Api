const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server', db);
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b07f5373fb8]35185055aff2')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Users').find({name: 'phi'}).toArray().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));

        db.collection('Users').find({name: 'phi'}).count().then((count) => {
            console.log(count);
        });
    })
   
    db.close();
});