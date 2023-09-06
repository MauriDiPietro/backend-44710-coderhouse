import mongoose from 'mongoose';
import { ProductModel } from './model/product.model.js';
import 'dotenv/config'

const connectionString = process.env.MONGO_ATLAS_URL;

export const initMongoDB = async ()=>{
    try {
        await mongoose.connect(connectionString);
        console.log('Conectado a la base de datos de MongoDB');
    } catch (error) {
        console.log(error);
    }
}


export const save = async (doc) => {
    try {
        const document = await ProductModel.create(doc);
        return document;
    } catch (error) {
        console.log(error);
    }
}

export const getAll = async () => {
    try {
        const docs = await ProductModel.find({});
        return docs;
    } catch (error) {
        console.log(error);
    }
}