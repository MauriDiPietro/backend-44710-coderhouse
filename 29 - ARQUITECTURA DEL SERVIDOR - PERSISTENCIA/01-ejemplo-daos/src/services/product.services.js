import Services from "./class.services.js";
import factory from '../persistence/daos/factory.js'
const { productManager } = factory;

export default class ProductService extends Services {
  constructor(){
    super(productManager)
  }

  getProdById = async (id) => {
    try {
      const item = await this.manager.getProdById(id);
      if (!item) return false;
      else return item;
    } catch (error) {
      console.log(error);
    }
  };

  createProd = async (obj) => {
    try {
      const newItem = await this.manager.createProd(obj);
      if (!newItem) return false;
      else return newItem;
    } catch (error) {
      console.log(error);
    }
  };
}


