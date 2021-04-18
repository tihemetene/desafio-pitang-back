const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UserRouter = require('./routes/user.router')

const app = express();

app.get('/', (req, res) =>{
  res.json({message: "teste"})
})

app.use('/api', UserRouter); 

app.listen(3333, () => {
  console.log("Rodando na porta 3333");
})