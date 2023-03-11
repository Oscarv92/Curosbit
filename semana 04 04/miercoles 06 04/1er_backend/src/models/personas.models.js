const { default: mongoose } = require("mongoose");
//se puede la de la linea 1 que es automatica o 3
//const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //establecemos el esquema con el que vamos a trabajar, es decir los campos o atributos.
const personasSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    primerApellido: String,
    segundoApellido: String,
    cedula: String,
    edad: Number,
    nota: Number,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

//convertir a modelo

module.exports = mongoose.model('personas', personasSchema)