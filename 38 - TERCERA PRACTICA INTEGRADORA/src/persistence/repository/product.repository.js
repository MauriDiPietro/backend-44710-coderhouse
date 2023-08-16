import factory from '../daos/factory.js';
const { productDao } = factory;
import ProductReqDTO from '../dtos/product.req.dto.js';

export default class ProductRepository {
    constructor() {
        this.dao = productDao;
    }

    async createProd(obj) {
        try {
            const prodDTO = new ProductReqDTO(obj);
            const response = await this.dao.create(prodDTO);
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}