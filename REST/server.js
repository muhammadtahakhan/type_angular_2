var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var apiRoutes = require('./routes/api');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./models/user'); // get our mongoose model
var cors = require('cors');

var port = process.env.PORT || 8080;
//MongoDB 
// app.set('superSecret', config.secret);
mongoose.connect('mongodb://localhost:27017/rest_test', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});



//Express
var app = express();
app.use(cors());
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.use(function(req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, CONNECT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, x-access-token, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
res.setHeader('Access-Control-Max-Age', '86400');
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "x-access-token", "Origin, X-Requested-With, Content-Type, Accept");
  var tok = req.body.token || req.query.token || req.headers['x-access-token'];
  
  next();
});

// basic route
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:'+port+'/api');
});
//return user jsonwebaccesstoken
app.post('/authenticate', function(req, res) {
    // console.log(req);
    // console.log(req.body.password);
  User.findOne({
      name: req.body.name
    }, function(err, user) {
        if (err) throw err;
  
        if (!user) {
          return res.json({success: false, msg: 'Authentication failed. User not found..'});
        } 
         if (user) {
      if (user.password != req.body.password) {
        console.log("db"+user.password);
        console.log("user"+req.body.password);
    //    return res.json({ success: false, message: 'Authentication failed. Wrong password.'});
    return res.json({success: false, msg: 'Authentication failed. password not found..'});
      } else {
            var token = jwt.sign(user, config.secret, {
          expiresInMinutes: 1440 // expires in 24 hours
                });

        // return the information including token as JSON
       
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

        }
    });
});  





app.get('/setup', function(req, res) {

  // create a sample user
  var nick = new User({ 
    name: 'name', 
    password: 'password',
    admin: true 
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

// route to a user (POST http://localhost:8080/api/authenticate)
app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
}); 


app.use('/api', apiRoutes);

app.listen(port);
console.log("API is runnig on port "+port);