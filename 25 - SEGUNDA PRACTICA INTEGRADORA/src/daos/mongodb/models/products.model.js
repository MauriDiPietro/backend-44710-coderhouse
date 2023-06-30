import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});

export const productsCollection = 'products';

export const ProductModel = mongoose.model(
   productsCollection,
   productsSchema 
);