const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async(req, res = Response ) => {

    const eventos = await Evento.find()
                                .populate('user', 'name');

    res.json({
        ok: true,
        eventos
    })

}


const crearEvento = async(req, res = Response ) => {

    const evento = new Evento( req.body );

    try {
        
        evento.user = req.uid;

        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })

    }

}


const actualizarEvento = async(req, res = Response ) => {

    const eventoId = req.params.id;

    try {
        const evento = await Evento.findById( eventoId );

        // Verificar si el evento existe
        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        // Verificar si la persona que lo creo es la misma que lo quiere actualizar
        if ( evento.user.toString() !== req.uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: req.uid
        }

        // new: true, para que devuelva el evento actualizado
        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );

        // Devolver el evento actualizado
        res.json({
            ok: true,
            evento: eventoActualizado
        })

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const eliminarEvento = (req, res = Response ) => {

    res.json({
        ok: true,
        msg: 'eliminarEvento'
    })

}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}