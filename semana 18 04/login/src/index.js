//requerir las dependencias necesarias

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database')

//configurar el cuerpo

app.set('Port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origen: '*' }));

app.use('/admin', require('./routes/admin.routes'))

app.listen(app.get('Port'), () => {
    console.log("Escuchando al servidor: JWT", app.get('Port'));
})