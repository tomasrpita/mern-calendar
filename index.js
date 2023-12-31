const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require("./database/config");

// console.log(process.env);


// crea el servidor de express
const app = express();

// Conexión con la base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Püblico
app.use(express.static('public')); // el path es el argumento


// Lectura y parseo del Body que venga en json
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Manejador para las rutas no capturadas por los endpoints anteriores
app.get('*', (req, resp) => {
    resp.sendFile(__dirname + '/public/index.html');
});

// escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Serrvidor corriendo en el puerto ${process.env.PORT}`);
}); 