const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
  res.send('Admin');
};

// was - postAddProduct
exports.addNewProduct = (req, res, next) => {
  console.log(req.body);
  const proname = req.body.proname;
  const picture = req.body.picture;
  const price = req.body.price;
  const category = req.body.category;

  const product = new Product({
    proname: proname,
    price: price,
    picture: picture,
    category: category
  });

  product
    .save()
    .then(result => {
      console.log(result);
      console.log('Created Product');
      // res.redirect('/shop/products');
    })
    .catch(err => {
      console.log(err);
    });
};
