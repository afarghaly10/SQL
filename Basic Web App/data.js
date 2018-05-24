var faker= require('faker');
var mysql= require("mysql");


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'afarghaly',
  database : 'join_us'
});

// INSERTING SINGLE DATA INTO SQL TABLE =======================================


// var q = 'insert into users (email) values ("mjak93@gmail.com")';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);

// });

// ---- Take 2 (dynamically)-----

// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
 
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });


// INSERTING LOTS OF DATA ====================

var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
data=[];
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 

connection.end();

//  Root User: afarghaly
//   Database Name: c9