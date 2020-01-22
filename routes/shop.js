const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/products', productsController.getAllProducts);
router.post('/addtocart', productsController.addToCart);

module.exports = router;
