// const path = require('path');
const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin');
const MiddleWare = require('../middleware');

router.post('/add-product', MiddleWare.verifyToken, AdminController.addNewProduct);

router.post('/edit-product', MiddleWare.verifyToken, AdminController.editProduct);

router.get('/products', MiddleWare.verifyToken, AdminController.getAllProducts);

module.exports = router;
