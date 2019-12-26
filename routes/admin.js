const path = require('path');
const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin');



router.post('/add-product', AdminController.addNewProduct);

router.post('/edit-product', AdminController.editProduct);

router.get('/products', AdminController.getAllProducts);


module.exports = router;
