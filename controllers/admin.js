const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.send(products);
    })
    .catch(err => {
      console.log(err);
    });
};

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
      // console.log(result);
      console.log('Created New Product');
      res.status(200).json({
        message: 'NEW Product Saved'
      });
    })
    .catch(err => {
      console.log(err);
    });
};


exports.editProduct = (req, res, next) => {
  console.log(req.body);
  const id = req.body._id;
  const updatedProname = req.body.proname;
  const updatedPicture = req.body.picture;
  const updatedPrice = req.body.price;
  const updatedCategory = req.body.category;

  Product.findById(id)
    .then(product => {
      product.proname = updatedProname;
      product.price = updatedPrice;
      product.picture = updatedPicture;
      product.category = updatedCategory;
      return product.save();
    })
    .then(result => {
      console.log(result);
      console.log("Product Edited");
      res.status(200).json({
        message: 'Product Edited Saved'
      });
    })
    .catch(err => {
      console.log(err);
    });
};
