const UserModel = require('../models/user.model');

class UserController{
  async index(req, res){
    const data = await UserModel.find();
    res.send({data})
  }

  async store(req, res){
    const data = req.body;
    const user = await UserModel.findOne({ cpf: data.cpf });
    if(user){
      return res.status(400).send({ message: "CPF já cadastrado."})
    }
    console.log(data)
    const newUser = await UserModel.create(data)
    res.send({user: newUser})
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

   async countData(req, res){
     const { date } = req.params;
     const datasMarcadas = await UserModel.find({
       date: date,
     }).count();
     res.send({ data: datasMarcadas});
   }

   async countHour(req, res){
     const { hour } = req.params;
     const horaMarcada = await UserModel.find({
       hour: hour,
     }).count();
     res.send({ data: horaMarcada})
   }
 }

module.exports = new UserController()