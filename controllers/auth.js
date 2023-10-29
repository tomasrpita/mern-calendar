const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

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

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);

    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
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

        // Verificar si existe el usuario
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña incorrectos'
            });
        }

        // Verificar contraseña
        const validPassword = bcrypt.compareSync(password, usuario.password);
        
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña incorrectos'
            });
        }

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);
        
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Comunicarse con el administrador'
        })
    }
}

const revalidarUsuario = async(req, res = response) =>{

    const {uid, name} = req;

    // Generar JWT
    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name,
        msg: 'renew',
        token
    })
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarUsuario
}