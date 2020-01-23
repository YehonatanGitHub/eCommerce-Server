const Product = require('../models/product');
const CartItem = require('../models/cart_item');

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .populate('category')
    .then(products => {
      console.log(products);
      res.send(products);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.addToCart = (req, res, next) => {
  console.log(req.body);
  const productId = req.body.productId;
  const cartId = req.body.cartId;
  const qty = req.body.qty;
  const cost = req.body.cost;

  const newCartItem = new CartItem({
    product: productId,
    cart: cartId,
    qty: qty,
    total_cost: cost
  });

  newCartItem
    .save()
    .then(result => {
      console.log(result);
      console.log('Created New cartItem');
      res.status(200).json({
        message: 'NEW cartItem Saved'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  console.log('req cart call');
  console.log(req.body);
  CartItem.find({ cart: req.body.id })
    .populate('product')
    .then(products => {
      console.log(products);
      res.send(products);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.delFromCart = (req, res, next) => {
  console.log('delFromCart');
  console.log(req.body);

  CartItem.deleteOne({ _id: req.body.id })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.delAllFromCart = (req, res, next) => {
  console.log('delAllFromCart');

  CartItem.deleteMany({})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

// kennels.deleteMany({ breed: "Labrador" }, function(err, result) {
//   if (err) {
//     res.send(err);
//   } else {
//     res.send(result);
//   }
// });
