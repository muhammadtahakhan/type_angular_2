var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product');


router.get('/', function(req, res) {
//   res.send("API");
   Product.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });

 });


router.post('/', function(req, res) {
//   res.send("API");
  Product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });

 });
 
 
router.put('/:id', function(req, res) {
//   res.send("API");
 Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
 });

router.delete('/:id', function(req, res) {
//   res.send("API");
 Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });

 });



//roures
// Product.methods(['get', 'put', 'push', 'delete']);
// Product.register(router, '/products')


// router.get('/products', function(req, res){
//     res.send('api is working');
// });

//return router
module.exports = router; 