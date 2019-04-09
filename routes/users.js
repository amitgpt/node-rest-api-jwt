const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/UserController');


router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/changepassword', userController.changepassword);


module.exports = router;