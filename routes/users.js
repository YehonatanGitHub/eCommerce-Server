const path = require('path');
const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');

router.post('/add-user', UsersController.addNewUser);

router.post('/checkifuser', UsersController.checkIfUser);

router.post('/login', UsersController.login);

router.get('/cart', UsersController.getCart);

module.exports = router;
