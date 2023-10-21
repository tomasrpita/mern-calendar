const { response } = require('express');


const getEventos = (req, res = Response ) => {

    res.json({
        ok: true,
        msg: 'getEventos'
    })


}
const crearEvento = (req, res = Response ) => {

    res.json({
        ok: true,
        msg: 'crearEvento'
    })

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