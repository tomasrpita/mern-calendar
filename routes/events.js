/*
    Rutas de eventos / Events
    host = /api/events
*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events')

const router = Router();


// Todos tienen que pasar por la validación del JWT
router.use(validarJWT)

// Obtener eventos
router.get('/',  getEventos);

// Crear un nuevo evento
router.post(
    '/',
    crearEvento
);

// Actualizar evento
router.put(
    '/:id',
    actualizarEvento
);

// Borrar evento
router.delete(
    '/:id',
    eliminarEvento
);

module.exports = router;