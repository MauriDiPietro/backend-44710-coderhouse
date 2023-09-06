import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/coderhouse';

export const initMongoDB = async() => {
    try {
        await mongoose.connect(connectionString);
        console.log('Conectado a la base de datos MongoDB');
    } catch (error) {
        console.log(error);
    }
}

export const disconnectMongoDB = async() => {
    try {
        await mongoose.disconnect();
        console.log('Desconectado de la base de datos MongoDB');
    } catch (error) {
        console.log(error);
    }
}