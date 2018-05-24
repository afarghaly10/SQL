var faker= require('faker');
var mysql= require("mysql");

var mysql   = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'afarghaly',
  database : 'join_us'
});

// ============================1) Find Earliest Date A User Joined=====================================

// var q = 'select date_format(min(created_at), "%M %D %Y") as "earliest_date" from users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log('earliest date: ',results[0].earliest_date);
// });


// ============================2) Find Email Of The First (Earliest)User=================================

// var q = 'select email,date_format(min(created_at), "%M %D %Y") as "created_at" from users where created_at = (select min(created_at) from users) ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log('email: ',results[0].email,' ','created_at: ' ,results[0].created_at);
// });


// ============================3) Users According To The Month They Joined=================================

// var q = 'select distinct date_format(created_at,"%M") as month,count(email) as count from users group by month order by count desc ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });


// ============================4) Count Number of Users With Yahoo Emails===================================

// var q = 'select count(email) as yahoo_users from users where email like "%yahoo.com" ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log('yahoo_users: ',results[0].yahoo_users);
// });

// ============================5) Calculate Total Number of Users for Each Email Host========================

var q = 'SELECT substring_index(email, "@", -1) as provider, COUNT(*) AS total_users FROM users GROUP BY provider ORDER BY total_users DESC ';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});



connection.end();