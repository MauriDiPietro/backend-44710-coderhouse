import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String }
});

export const ProductModel = mongoose.model('products', productSchema);