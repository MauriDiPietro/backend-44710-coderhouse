import Controllers from "./class.controllers.js";
import ProductService from "../services/product.services.js";

const productService = new ProductService();

export default class ProductController extends Controllers {
    constructor(){
        super(productService)
    }
}