const { response } = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = (req, res = response) =>{

    const {name, email, password} = req.body

    //manejo de errores
    const errors = validationResult( req );
    // console.log(errors);
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    } 

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res = response) =>{

    const {name, email, password} = req.body

    //manejo de errores
    const errors = validationResult( req );
    // console.log(errors);
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    } 

    res.json({
        ok: true,
        msg: 'login',
        name,
        email,
        password
    })
}

const revalidarUsuario = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'renew'
    })
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarUsuario
}