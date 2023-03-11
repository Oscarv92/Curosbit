const mongoose = require('mongoose');
const { Schema } = mongoose;

//cualquiera de las dos es valida
//const Schema = mongoose.Schema;
//const {Schema} = mongoose;

const adminSchema = new Schema({
    nombre: String,
    correo: String,
    contrasena: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('admin', adminSchema);