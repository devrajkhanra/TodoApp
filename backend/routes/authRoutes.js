// routes/authRoutes.js
const express = require('express');
const { register, login, logout } = require('../controllers/index');
const {authenticate} = require('../middlewares/authenticate')

const router = express.Router();

router.post('/register', register);
router.post('/login', login)
router.post('/logout', authenticate, logout)

module.exports = router;