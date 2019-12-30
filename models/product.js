const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  proname: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true }
});

// var Product = mongoose.model('Product', productSchema);

// const product = new Product({
//   name: 'test product',
//   price: 100.99,
//   imageUrl: 'www.google.com'
// });

// product.save(function(err, firstProduct) {
//   if (err) return console.error(err);
//   console.log(firstProduct);
// });
// const Product = mongoose.model('Role', roleSchema);

module.exports = mongoose.model('Product', productSchema);
