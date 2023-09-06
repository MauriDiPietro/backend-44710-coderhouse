import MongoDao from "../mongo.dao.js";
import { ProductModel } from "../models/products.model.js";

export default class ProductManager extends MongoDao{
    constructor(){
        super(ProductModel)
    }
}