const mongoose = require('mongoose');
require('dotenv').config()



const dbConnection = async() => {

    try {

        await mongoose.connect('mongodb+srv://Angel_Node:diminombre@cluster0.b1cer.mongodb.net/Saint', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    dbConnection
}