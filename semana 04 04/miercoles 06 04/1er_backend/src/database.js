/*establecemos la conexion de la bd
debemos tener en cuenta la direccion; sea local o externa(servidor)
*/
const mongoose = require('mongoose');
URL = ('mongodb://localhost/bdPersonasBit');

//enviamos la conexion de la bd, establecemos  unas configuraciones predeterminadas
mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(db => console.log('Base de datos conectada: ', db.connection.name))
    .catch(error => console.log(error))

//exportamos nuestro modulo de la bd
module.exports = mongoose