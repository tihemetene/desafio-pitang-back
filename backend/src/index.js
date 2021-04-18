// const cors = require('cors');
// const bodyParser = require('body-parser');
const express = require('express');
const UserRouter = require('./routes/user.router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vacinacao',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();

app.get('/', (req, res) =>{
  res.json({message: "teste"})
})

app.use('/api', UserRouter); 

app.listen(3333, () => {
  console.log("Rodando na porta 3333");
})