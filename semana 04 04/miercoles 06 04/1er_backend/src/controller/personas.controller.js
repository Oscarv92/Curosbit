const personaCtrl = {};
const res = require('express/lib/response');
const persona = require('../models/personas.models');
/*aqui estamos realizando nuestra primera peticion:POST la cual se va a encargar de enviar informacion que requerimos*/
personaCtrl.crear = async(req, res) => {
    const { nombre, primerApellido, segundoApellido, cedula, edad, nota } = req.body
    const nuevaPersona = new persona({
            nombre,
            primerApellido,
            segundoApellido,
            cedula,
            edad,
            nota
        })
        //aqui evaluamos la respuesta, si es OK nos va a retornar el mensaje positivo
    const respuesta = await nuevaPersona.save()
    res.json({
        mensaje: 'Persona creada',
        respuesta
    })

}

personaCtrl.listar = async(req, res) => {
    const respuesta = await persona.find()
    res.json(respuesta)
}

personaCtrl.eliminar = async(req, res) => {
    const id = req.params.id
    await persona.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: "Persona eliminar"
    })
}

personaCtrl.actualizar = async(req, res) => {
    const id = req.params.id
    await persona.findByIdAndUpdate({ _id: id }, req.body)
    res.json({
        mensaje: "Persona actualizada"
    })
}

module.exports = personaCtrl