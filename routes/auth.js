/*
    Rutas de usuarios / Auth
    host = /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarUsuario  } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");


router.post(
    '/new',
    [ // Middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email no es valido').isEmail(),
        check('password', 'el password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    crearUsuario
);

router.post(
    '/', 
    [ // Middlewares
        // Middlewares
        check('email', 'El email no es valido').isEmail(),
        check('password', 'el password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    loginUsuario);

router.get(
    '/renew',
    validarJWT,
    revalidarUsuario);


module.exports = router;