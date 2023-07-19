import Services from "./class.services.js";
import factory from '../persistence/daos/factory.js'
const { productManager } = factory;
import ProductRepository from "../persistence/daos/repository/product.repository.js";
const prodRepository = new ProductRepository();

export default class ProductService extends Services {
  constructor(){
    super(productManager)
  }

  getProdById = async (id) => {
    try {
      const item = await prodRepository.getProdById(id);
      if (!item) return false;
      else return item;
    } catch (error) {
      console.log(error);
    }
  };

  createProd = async (obj) => {
    try {
      const newItem = await prodRepository.createProd(obj);
      if (!newItem) return false;
      else return newItem;
    } catch (error) {
      console.log(error);
    }
  };
}


