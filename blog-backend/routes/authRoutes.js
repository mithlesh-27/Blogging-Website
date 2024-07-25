const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/authController');
const { validateUser } = require('../validators/userValidator');

const router = express.Router();

router.post('/register', validateUser, registerUser);
router.post('/login', validateUser, loginUser);

module.exports = router;
