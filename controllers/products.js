const Product = require('../models/product');
const CartItem = require('../models/cart_item');
const Order = require('../models/orders');

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

exports.placeOrder = (req, res, next) => {
  console.log('placeOrder');
  console.log(req.body);

  const newOrder = new Order({
    user: req.body.user,
    cart: req.body.cart,
    city_deliver: req.body.city,
    street_deliver: req.body.street,
    date: req.body.date,
    total_cost_order: req.body.cost,
    date_to_deliver: req.body.date_to_deliver,
    date_delivered: req.body.date_delivered,
    credit_card: req.body.card
  });

  newOrder
    .save()
    .then(result => {
      console.log(result);
      console.log('Created New order');
      res.status(200).json({
        message: 'NEW order Saved'
      });
    })
    .catch(err => {
      console.log(err);
    });
};
exports.getOrder = (req, res, next) => {
  Order.find()
    .then(orders => {
      console.log(orders);
      let lenthArr = orders.length;
      console.log(lenthArr);
      res.status(200).json({
        message: lenthArr
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      let lenthArr = products.length;
      console.log(lenthArr);
      res.status(200).json({
        message: lenthArr
      });
    })
    .catch(err => {
      console.log(err);
    });
};
