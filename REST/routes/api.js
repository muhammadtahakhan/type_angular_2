var express = require('express');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./../config'); // get our config file
var User   = require('./../models/user'); // get our mongoose model
var config = require('./../config');
var apiRoutes = express.Router();     

apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});


// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
 
apiRoutes.post('/users', function(req, res) {
  User.findOne({
      name: req.body.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
        }
    });
});  


apiRoutes.post('/authenticate', function(req, res) {
  User.findOne({
      name: req.body.name
    }, function(err, user) {
        if (err) throw err;
  
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found..'});
        } else if (user) {
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
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

module.exports = apiRoutes; 




















// var express = require('express');
// var router = express.Router();

// //Models
// var Product = require('../models/product');



// router.get('/', function(req, res) {
// //   res.send("API");
//    Product.find(function (err, todos) {
//     if (err) return next(err);
//     res.json(todos);
//   });

//  });


// router.post('/', function(req, res) {
// //   res.send("API");
//   Product.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });

//  });
 
 
// router.put('/:id', function(req, res) {
// //   res.send("API");
//  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
//  });

// router.delete('/:id', function(req, res) {
// //   res.send("API");
//  Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });

//  });



// //roures
// // Product.methods(['get', 'put', 'push', 'delete']);
// // Product.register(router, '/products')


// // router.get('/products', function(req, res){
// //     res.send('api is working');
// // });

// //return router
// module.exports = router; 