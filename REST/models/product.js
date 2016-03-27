
var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
//   completed: Boolean,
//   note: String,
//   updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', TodoSchema);







// var restful = require('node-restful');
// var mongoose = restful.mongoose;

// //schema
// var productSchema = new mongoose.Schema({
//     name:String,
//     sku:String, 
//     price:Number
// });

// //return model
// module.exports = restful.model('Products', productSchema);