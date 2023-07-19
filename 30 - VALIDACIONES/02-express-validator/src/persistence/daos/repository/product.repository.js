import factory from '../factory.js';
const { productManager } = factory;
import ProductRegisterDTO from '../../dtos/product/product.register.dto.js';
import ProductResponseDTO from '../../dtos/product/product.response.dto.js';

export default class ProductRepository {
    constructor(){
        this.dao = productManager;
    }

    async getProdById(id) {
        try {
          const product = await this.dao.getById(id);
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
          const response = await this.dao.create(objDTO);
          return response;
        } catch (error) {
          console.log(error);
        }
      }
}