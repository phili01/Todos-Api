const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123ABC');
console.log(token);

var decoded = jwt.verify(token , '123ABC');
console.log('decoded', decoded);
// var message = 'I am user number ';
// var hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
//     id: 5
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'secret to do').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'secret to do').toString();

// if (resultHash === token.hash) {
//     console.log('data was not change');
// } else {
//     console.log('data was change');
// }