var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var product = require('./routes/api')

//MongoDB
mongoose.connect('mongodb://localhost:27017/rest_test', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

//Routes
app.use('/api',product);


//Starting server
app.listen(3000);
console.log("API is runnig on port 3000");