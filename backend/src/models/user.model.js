const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
  {
  cpf: String,
  name: String,
  age: Number,
  date: String,
  hour: String,
  isAtendido: String,
  isIdoso: Boolean,
  note: String,
},
{ timestamps: true}
);
const UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel;