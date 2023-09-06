import { DataTypes } from 'sequelize';
import db from '../connection.js';

export const ProductModel = db.define('products', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    stock: {
        type: DataTypes.INTEGER
    }
});