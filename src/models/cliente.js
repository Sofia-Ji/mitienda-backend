const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre : { type : String, required:true},
    identificacion : {type: Number, required: true},
    correo : String,
    celular : String,
    genero : {type : String, default : 'Femenino'},
    fechadenacimiento: { type : Date, default: Date.now()}
},{
    timestamps: true            //adiciona fecha creacion y fecha actualizacion 
})

module.exports = mongoose.model("cliente", clienteSchema)