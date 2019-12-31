const path = require('path');
const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');

router.post('/add-user', UsersController.addNewUser);

router.get('/cart', UsersController.getCart);


module.exports = router;
