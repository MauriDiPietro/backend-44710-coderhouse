import Services from "./class.services.js";
import factory from '../persistence/daos/factory.js';
const { productDao } = factory;
import ProductRepository from "../persistence/repository/product.repository.js";
const prodRepository = new ProductRepository();

export default class ProductService extends Services {
  constructor(){
    super(productDao)
  }

  createProd = async (obj) => {
    try {
      const newProd = await prodRepository.createProd(obj);
      if (!newProd) return false;
      else return newProd;
    } catch (error) {
      throw new Error(error.message)
    }
  }
}


