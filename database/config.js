const mongoose = require('mongoose');


const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.DB_CNN);

        console.log('Conección con DD.BB establecida');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error en la inicialización de la DB');
        
    }

}


module.exports = {
    dbConnection
}