export default class ProductRegisterDTO {
    constructor(product) {
        this.nameOfProd = product.name
        this.descriptionOfProd = product.description
        this.priceOfProd = product.price
        this.stockOfProd = product.stock
    }
}