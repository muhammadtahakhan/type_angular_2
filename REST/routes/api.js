var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product');


//roures
Product.methods(['get', 'put', 'push', 'delete']);
Product.register(router, '/products')


// router.get('/products', function(req, res){
//     res.send('api is working');
// });

//return router
module.exports = router; 