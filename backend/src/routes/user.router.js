const {Router} = require('express');
const userController = require('../controllers/user.controller');
const UserController = require('../controllers/user.controller')

const router = Router();

router.get('/user', userController.index)
router.get('/user/:id', userController.getOne)
router.delete('/user/:id', userController.remove)
router.post('/user', userController.store)

module.exports = router;