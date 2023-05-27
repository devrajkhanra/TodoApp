// routes/authRoutes.js
const express = require('express');
const { register, login, logout, getUser, updateUser } = require('../controllers/index');
const {authenticate} = require('../middlewares/authenticate')

const router = express.Router();

router.post('/register', register);
router.post('/login', login)
router.post('/logout', authenticate, logout)
router.get('/getUser/:userId', authenticate, getUser)
router.patch('/updateUser/:userId', authenticate, updateUser)

module.exports = router;