const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/roles', usersController.getUserRole);

module.exports = router;
