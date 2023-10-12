const { response } = require('express');
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res = response) => {

    const {name, email, password} = req.body

    try {

        let usuario = await Usuario.findOne({ email })

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Error: Ususario ya existe'
            })
        }

        usuario = new Usuario(req.body);
    
        await usuario.save();
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Comunicarse con el administrador'
        })
        
    }
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