const Product = require('../models/product');

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

