const mongoose = require('mongoose')
const { Schema } = mongoose

const empleadoSchema = new Schema({
    nombres: String,
    apellidos: String,
    cedula: Number,
    cargo: [],
    correo: String,
    tipoContrato: String,
    jefe: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('empleado', empleadoSchema)