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


const actualizarEvento = (req, res = Response ) => {

    res.json({
        ok: true,
        msg: 'actualizarEvento'
    })

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