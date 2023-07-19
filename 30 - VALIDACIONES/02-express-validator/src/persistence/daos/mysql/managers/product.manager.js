import MySqlDao from "../mysql.dao.js";
import { ProductModel } from "../models/product.model.js";

export default class ProductManagerMySql extends MySqlDao {
    constructor(){
        super(ProductModel)
    }
}

