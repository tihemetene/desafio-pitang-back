const {Router} = require('express');
const userController = require('../controllers/user.controller');
const UserController = require('../controllers/user.controller')

const router = Router();

router.get('/user', userController.index)

module.exports = router;