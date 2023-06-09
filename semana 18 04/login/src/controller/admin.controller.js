const adminCtrl = {};

const adminModel = require('../models/admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

adminCtrl.crear = async(req, res) => {
    const { nombre, correo, contrasena } = req.body
    const nuevoAdmin = new adminModel({
        nombre,
        correo,
        contrasena
    })
    const correoAdmin = await adminModel.findOne({ correo: correo })
    if (correoAdmin) {
        res.json({
            mensaje: 'El correo ya existe'
        })
    } else {
        nuevoAdmin.contrasena = await bcrypt.hash(contrasena, 10);
        const token = jwt.sign({ _id: nuevoAdmin._id }, 'secreta');
        await nuevoAdmin.save()
        res.json({
            mensaje: 'Bienvenido, tu si haces parte',
            id: nuevoAdmin._id,
            nombre: nuevoAdmin.nombre,
            token
        })
    }
}

adminCtrl.iniciarSesion = async(req, res) => {
    const { correo, contrasena } = req.body
    const admin = await adminModel.findOne({ correo: correo })
    if (!admin) {
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, admin.contrasena)
    if (match) {
        const token = jwt.sign({ _id: admin._id }, 'secreta')
        res.json({
            mensaje: 'Iniciaste sesion correctamente',
            id: admin.id,
            nombre: admin.nombre,
            token
        })
    } else {
        res.json({
            mensaje: 'Contraseña incorrecta'
        })
    }
}

module.exports = adminCtrl;