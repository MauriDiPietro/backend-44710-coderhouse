import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
import { createResponse } from "../utils.js";
const productService = new ProductService()

export default class ProductController extends Controllers{
  constructor(){
    super(productService)
  }

  getProdById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.service.getProdById(id);
      if (!item) createResponse(res, 404, {method: 'getById', error: "Item not found!"});
      else createResponse(res, 200, item);
    } catch (error) {
      next(error.message);
    }
  };

  createProd = async (req, res, next) => {
    try {
      const newItem = await this.service.createProd(req.body);
      if (!newItem) createResponse(res, 404, {method: 'create', error: "Validation error!"});
      else createResponse(res, 200, newItem);
    } catch (error) {
      next(error.message);
    }
  };
}


