const express = require('express');
require('dotenv').config();

console.log(process.env);


// crea el servidor de express
const app = express();

// Directorio Püblico
app.use(express.static('public')); // el path es el argumento

// Rutas
// app.get('/', (req, res) =>{

//     res.json({
//         ok: true
//     })
// })

// escuchar peticiones


app.listen(process.env.PORT, () => {
    console.log(`Serrvidor corriendo en el puerto ${process.env.PORT}`);
});