const { response } = require('express');


const crearUsuario = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'register'
    })
}

const loginUsuario = (req, res = response) =>{

    res.json({
        ok: true,
        msg: 'login'
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