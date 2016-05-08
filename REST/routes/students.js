var express = require('express');
var Students = require('./../models/students');

var studentRoutes = express.Router();  


studentRoutes.get('/', function(req, res) {
     res.send('hello Students');
    
});
studentRoutes.post('/createstuden', function(req, res){
     // create a sample user
  var nick = new Students({ 
    name: req.body.name, 
    email: req.body.email,
    class: req.body.class,
    gender: req.body.gender
   
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});



module.exports = studentRoutes; 