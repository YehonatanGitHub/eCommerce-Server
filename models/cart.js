const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  creatDate: { type: Date, required: true },
  closed: { type: Boolean, required: true }
});

// const Cart = mongoose.model('Cart', cartSchema);

// const date1 = Date()

// const testCart = new Cart({
//   userId: '5e0b1a9b674bda50b063ec0c',
//   creatDate: date1,
//   closed: true
// });

// testCart.save(function (err, testCart) {
//   if (err) return console.error(err);
//   console.log(testCart);
// });

module.exports = mongoose.model('Cart', cartSchema);
