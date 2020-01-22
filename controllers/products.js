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
  const userId = req.body.userId;
  const qty = req.body.qty;
  const cost = req.body.cost;

  const newCartItem = new CartItem({
    product: productId,
    cart: userId,
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
