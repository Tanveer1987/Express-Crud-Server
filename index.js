var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var friendsRoute = require("./routes/friends.routes");

var app = express();

mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.Promise = global.Promise;

mongoose.connection.once('open', function() {
    console.log('Database connection is made successfully');
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next();
});

 
app.use('/friends', friendsRoute);



app.listen(3000, function() {
    console.log('Server is running');
});