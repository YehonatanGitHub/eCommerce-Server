const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  cart: { type: Schema.Types.ObjectId, ref: "Cart", required: true },
  qty: { type: Number, required: true },
  total_cost: { type: Number, required: true }
});

// const cartItem = mongoose.model('cartItem', cartItemSchema);

// const date1 = Date()

// const newCartItem = new cartItem({
//   product: '5e0b1b100424b44b50b5c5e5',
//   cart: '5e0a1fe8fda1975c88f295c0',
//   qty: 2,
//   total_cost: 4
// });

// newCartItem.save(function (err, newCartItem) {
//   if (err) return console.error(err);
//   console.log(newCartItem);
// });

module.exports = mongoose.model('CartItem', cartItemSchema);
