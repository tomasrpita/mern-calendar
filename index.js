const express = require('express');
require('dotenv').config();

// console.log(process.env);


// crea el servidor de express
const app = express();

// Directorio Püblico
app.use(express.static('public')); // el path es el argumento


// Lectura y parseo del Body que venga en json
app.use(express.json())


// Rutas
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD  -eventos Calendario

// escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Serrvidor corriendo en el puerto ${process.env.PORT}`);
});