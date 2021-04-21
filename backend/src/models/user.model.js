const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
  {
  cpf: String,
  name: String,
  age: String,
  date: String,
  isAtendido: Boolean,
  isIdoso: Boolean
},
{ timestamps: true}
);
const UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel;