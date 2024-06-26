const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/get/:email', userController.getUserByEmail);
router.get('/get', userController.getUsers);
router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;