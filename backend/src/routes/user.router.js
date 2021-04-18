const {Router} = require('express');

const router = Router();

router.get('/user', (req, res) =>{
  res.send({message: 'User test'})
})

module.exports = router;