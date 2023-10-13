const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res = response) => {

    const {email, password} = req.body

    try {

        let usuario = await Usuario.findOne({ email })

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Error: Ususario ya existe'
            })
        }

        usuario = new Usuario(req.body);

        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        
        // Cambiar la contraseña plana por la encriptada
        usuario.password = bcrypt.hashSync(password, salt);

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


const loginUsuario = async(req, res = response) =>{

    const {email, password} = req.body

    try {

        const usuario = await Usuario.findOne({ email })

        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Error: Ususario no existe con ese email'
            })
        }

        // Confirmar passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña invalida'
            })
        }

        // Generar nuestro JWT
        
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