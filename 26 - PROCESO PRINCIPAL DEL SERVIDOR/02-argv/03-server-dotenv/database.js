import mongoose from 'mongoose';
import 'dotenv/config';

let MONGO_URL = '';
let NODE_ENV = process.env.NODE_ENV || 'dev';

switch (NODE_ENV) {
    case 'dev':
        MONGO_URL = process.env.MONGO_LOCAL;
        console.log('db local');
        break;
    case 'qa':
        MONGO_URL = process.env.MONGO_QA;
        console.log('db qa');
        break;
    case 'prod':
        MONGO_URL = process.env.MONGO_PROD;
        console.log('db prod');
        break;
    default:
        MONGO_URL = process.env.MONGO_LOCAL;
        console.log('db local');
        break;
}

try {
    await mongoose.connect(MONGO_URL);
    console.log('Conectado a la base de datos de MongoDB');
} catch (error) {
    console.log(error);
}
