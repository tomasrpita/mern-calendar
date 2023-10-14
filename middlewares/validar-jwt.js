//middlewares/validar-jwt.js
const jwt = require('jsonwebtoken');
const { response } = require('express');

const validarJWT = ( req, res = response, next ) => {
    // Extraemos el token del header
    const token = req.header('x-token');
    
    // Verificamos si hay un token
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        // Validamos el token
        const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);
        
        // Extraemos información útil del payload
        const { uid, name } = payload;
        
        // Actualizamos el objeto req para uso posterior
        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        // Si la verificación falla, retornamos un error
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
    
    // Pasamos al siguiente middleware o al controller si todo está bien
    next();
};


module.exports = {
    validarJWT
}