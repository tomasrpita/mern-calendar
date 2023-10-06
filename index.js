const express = require('express');


// crea el servidor de express
const app = express();

// Rutas
app.get('/', (req, res) =>{

    res.json({
        ok: true
    })
})

// escuchar peticiones
const PORT = 4001;

app.listen(PORT, () => {
    console.log(`Serrvidor corriendo en el puerto ${PORT}`);
});