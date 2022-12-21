const ctrCliente = {};
const cliente = require("../models/cliente");

ctrCliente.guardar = async(req, res) =>{
    await cliente
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
// funcion CRUD
// Read
ctrCliente.listar = async(req,res) => {
    await cliente
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//buscar ID
ctrCliente.buscarId = async(req, res) =>{
    await cliente
    .findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// read buscar por caracter nombre 
ctrCliente.buscarNom = async (req,res) =>{
    await cliente
    .find({nombre : RegExp(req.params.nom,'i')})
    .then( data => res.json(data))
    .catch( err => res.json(err))
}

//Actualizar datos 
ctrCliente.actualizar = async(req,res) =>{
    const{_id, ...body} = res.body;
    await cliente
    .updateOne({_id : _id},{$set : body})
    .then()
    .catch()
}

// Delete
ctrCliente.eliminar = async(req,res) =>{
    await cliente
    .delete0ne({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
module.exports = ctrCliente