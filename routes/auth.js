/*
    Rutas de usuarios / Auth
    host = /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarUsuario  } = require("../controllers/auth");


router.post(
    '/new',
    [ // Middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email no es valido').isEmail(),
        check('password', 'el password debe de ser de 6 caracteres').isLength({min: 6}),
    ],
    crearUsuario
);

router.post(
    '/', 
    [ // Middlewares
        // Middlewares
        check('email', 'El email no es valido').isEmail(),
        check('password', 'el password debe de ser de 6 caracteres').isLength({min: 6}),
    ],
    loginUsuario);

router.get(
    '/renew',
    [ 
    ],
    revalidarUsuario);


module.exports = router;