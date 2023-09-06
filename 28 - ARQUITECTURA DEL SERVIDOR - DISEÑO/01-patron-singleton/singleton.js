import mongoose from 'mongoose';
import 'dotenv/config';

class ConnectMongoDB {
    static #instance

    constructor(){
        mongoose.connect(process.env.MONGO_ATLAS_URL)
    }

    static getInstance(){
        if(this.#instance){
            console.log('Ya está conectado a MongoDB!');
            return this.#instance
        } else {
            this.#instance = new ConnectMongoDB();
            console.log('Conectado a MOngoDB!');
            return this.#instance
        }
    }
}

const conn1 = ConnectMongoDB.getInstance();
const conn2 = ConnectMongoDB.getInstance();
const conn3 = ConnectMongoDB.getInstance();
