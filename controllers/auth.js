const { response } = require('express');


const crearUsuario = (req, res = response) =>{

    const {name, email, password} = req.body

    if (name.length < 5) {
        return res.status(400).json({
            ok: false,
            msg: 'el nombre debe de ser minimo 5 letras'
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