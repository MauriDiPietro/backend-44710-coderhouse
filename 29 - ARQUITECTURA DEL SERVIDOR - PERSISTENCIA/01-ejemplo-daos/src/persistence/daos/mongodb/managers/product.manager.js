import MongoDao from "../mongo.dao.js";
import { ProductModel } from "../models/products.model.js";
import ProductResponseDTO from "../../../dtos/product/product.response.dto.js";
import ProductRegisterDTO from "../../../dtos/product/product.register.dto.js";

export default class ProductManagerMongo extends MongoDao {
  constructor() {
    super(ProductModel);  
  }

  async getProdById(id) {
    try {
      const product = await this.model.findById(id);
      console.log('product--->', product);
      const prodDTO = new ProductResponseDTO(product);
      return prodDTO;
    } catch (error) {
      console.log(error);
    }
  }

  async createProd(obj) {
    try {
      const objDTO = new ProductRegisterDTO(obj)
      const response = await this.model.create(objDTO);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

