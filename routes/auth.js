/*
    Rutas de usuarios / Auth
    host = /api/auth
*/

const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarUsuario  } = require("../controllers/auth");


router.post('/new',  crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarUsuario);


module.exports = router;