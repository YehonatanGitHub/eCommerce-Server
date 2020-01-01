const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  use: { type: Schema.Types.ObjectId, ref: "User", required: true },
  cart: { type: Schema.Types.ObjectId, ref: "Cart", required: true },
  total_cost_order: { type: Number, required: true },
  city_deliver: { type: String, required: true },
  street_deliver: { type: String, required: true },
  date_to_deliver: { type: Date, required: true },
  date_delivered: { type: Date, required: true },
  credit_card: { type: Number, required: true }
});

// const Order = mongoose.model('Order', orderSchema);


// const date1 = Date()

// const newOrder = new Order({
//   use: '5e0b6c69a959454884dab13e',
//   cart: '5e0b6c69a959454884dab13f',
//   total_cost_order: 1234,
//   city_deliver: 'tel aviv',
//   street_deliver: 'shoken',
//   date_to_deliver: Date(),
//   date_delivered: Date(),
//   credit_card: 1234
// });

// newOrder.save(function (err, newOrder) {
//   if (err) return console.error(err);
//   console.log(newOrder);
// });

module.exports = mongoose.model('CartItem', orderSchema);
