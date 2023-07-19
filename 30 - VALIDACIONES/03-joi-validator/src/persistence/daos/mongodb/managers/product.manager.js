import MongoDao from "../mongo.dao.js";
import { ProductModel } from "../models/products.model.js";
import ProductResponseDTO from "../../../dtos/product/product.response.dto.js";
import ProductRegisterDTO from "../../../dtos/product/product.register.dto.js";

export default class ProductManagerMongo extends MongoDao {
  constructor() {
    super(ProductModel);  
  }
}

