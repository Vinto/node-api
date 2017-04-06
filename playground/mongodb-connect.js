// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}

	console.log('Connected to MongoDB Server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do 	here',
	// 	complted: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Error unable to save data', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.close();

	// db.collection('Users').insertOne({
	// 	name: 'Cristiano',
	// 	age: 32,
	// 	location: 'Madrid'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Error: unable to save data', err);
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	db.close();
});