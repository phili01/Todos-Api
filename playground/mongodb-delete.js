const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server', db);
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').deleteMany({text: 'lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'lunch'}).then((result) => {
    //     console.log(result);
    // });
   
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    // db.close();

    // db.collection('Users').deleteMany({name: 'phi'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteOne({_id: new ObjectID('5b07fd209765c54f1835896a')}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID("5b081d03340092a525b323a7")}).then((result) => {
    //     console.log(result);
    // });
});