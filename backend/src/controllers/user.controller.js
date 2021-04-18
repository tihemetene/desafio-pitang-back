const UserModel = require('../models/user.model');

class UserController{
  async index(req, res){
    const users = await UserModel.find();
    res.send({users})
  }

  async store(req, res){
    const data = req.body;
    if (data.age >= 60){
      data.isIdoso === true;
    }data.isIdoso === false;
    const user = await UserModel.create(data)
    res.send({user})
  }

  async getOne(req, res){
    const {id} = req.params;

    try{
      const user = await UserModel.findById(id)
      res.send({user})

    }catch(e){
      res.status(400).send({message: "Erro ao encontrar paciente."})
    }
  }

  async remove(req, res){
    const {id} = req.params;
    try{
      const user = await UserModel.findByIdAndDelete(id);
      if(user){
        res.send({message: "Paciente removido."})
      }throw new Error("Paciente não encontrado.")
    }catch(e){
      res.status(400).send({message: e.message})
    }
  }
}

module.exports = new UserController()