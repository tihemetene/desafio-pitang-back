const UserModel = require('../models/user.model');

class UserController{
  async index(req, res){
    const data = await UserModel.find();
    res.send({data})
  }

  async store(req, res){
    const data = req.body;
    console.log(data)
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

  async update(req, res){
    const {params: {id}, body} = req;
    const user = await UserModel.findOneAndUpdate(id, body).lean();
      res.send({user: {
        ...user,
        ...body,
      }})
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