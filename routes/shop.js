const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/products', productsController.getAllProducts);
router.post('/addtocart', productsController.addToCart);
router.post('/cart', productsController.getCart);
router.post('/delfromcart', productsController.delFromCart);
router.post('/delallfromcart', productsController.delAllFromCart);
router.post('/order', productsController.placeOrder);
router.get('/getorders', productsController.getOrder);
router.get('/getproducts', productsController.getProducts);
module.exports = router;
