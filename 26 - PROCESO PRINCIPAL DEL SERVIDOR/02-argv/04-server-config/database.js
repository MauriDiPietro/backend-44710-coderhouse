import mongoose from 'mongoose';
import config from './config.js';

let MONGO_URL = '';

switch (config.NODE_ENV) {
    case 'dev':
        MONGO_URL = config.MONGO_LOCAL;
        console.log('db local');
        break;
    case 'qa':
        MONGO_URL = config.MONGO_QA;
        console.log('db qa');
        break;
    case 'prod':
        MONGO_URL = config.MONGO_PROD;
        console.log('db prod');
        break;
    default:
        MONGO_URL = config.MONGO_LOCAL;
        console.log('db local');
        break;
}

try {
    await mongoose.connect(MONGO_URL);
    console.log('Conectado a la base de datos de MongoDB');
} catch (error) {
    console.log(error);
}
