const express = require('express')
const app = express()
const port = 3000
    //aqui usamos la carpeta public que creamos para que tenga acceso al archivo index.html
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true, }));

app.get('/', (req, res) => {
    res.send('Saludos de node.js!')
})

// aqui hacemos el envio del formulario
app.post('/prueba', (req, res) => {
        res.send('Datos recibidos!')
    })
    // aqui inventamos una ruta para hacer prueba
app.get('/bit', (req, res) => {
        res.send('Bienevenido a la pagina BIT!')
    })
    //aqui va a escuchar al puerto que hemos designado para que establesca la comunicacion
app.listen(port, () => {
    console.log(`Estoy escuchando el puerto: ${port}`)
})