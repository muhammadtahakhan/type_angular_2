var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://localhost:27017/rest_test');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//Starting server
app.listen(3000);
console.log("API is runnig on port 3000");