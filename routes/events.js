/*
    Rutas de eventos
    host = /api/events
*/

const { Router } = require('express');
// const { check } = require('express-validator');
const router = Router();


// Todos tienen que pasar por la validación del JWT

// Obtener eventos
router.get('/', getEventos);

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