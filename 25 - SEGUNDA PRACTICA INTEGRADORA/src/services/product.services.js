import Services from "./class.services.js";
import ProductManager from "../daos/mongodb/managers/product.manager.js";

const prodManager = new ProductManager();

export default class ProductService extends Services {
    constructor(){
        super(prodManager)
    }
};