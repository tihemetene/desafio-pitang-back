const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  cpf: String,
  name: String,
  age: String,
  date: String,
},
{ timestamps: true})