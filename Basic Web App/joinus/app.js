var express = require('express');
var app = express();
var mysql= require("mysql");
var bodyParser  = require("body-parser");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'afarghaly',
  database : 'join_us'
});


app.get("/", function(request, response){
    var q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, function (error, results){
        if (error) throw error;
        var count = results[0].count;
        // response.send("Join the " + count + " users to get 60 days full site acces and enjoy all services for free !");
        response.render("home", {countt: count});
    });
});

app.post('/register', function(req,res){
 var person = {email: req.body.email};
 connection.query('INSERT INTO users SET ?', person, function(err, result) {
 console.log(err);
 console.log(result);
 res.redirect("/");
 });
});

app.get("/joke", function(req, res){
    var joke = "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabrador.</em>";
    res.send(joke);
});

app.get("/random_num", function(req, res){
    var num = Math.floor((Math.random() * 10) + 1);
    res.send("Your lucky number is " + num);
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});