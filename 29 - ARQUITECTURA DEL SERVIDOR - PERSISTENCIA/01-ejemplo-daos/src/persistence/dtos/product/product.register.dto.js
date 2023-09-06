export default class ProductRegisterDTO {
    constructor(product) {
        this.nameOfProd = product.name
        this.description = product.description
        this.price = product.price
        this.stock = product.stock
    }
}