const {Router} = require('express');
const userController = require('../controllers/user.controller');

const router = Router();

router.get('/user', userController.index)
router.get('/user/:id', userController.getOne)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.remove)
router.post('/user', userController.store)
router.get('/agendamentos/:date', userController.countData)
router.get('/agendamentos/:date/:hour', userController.countHour)

module.exports = router;