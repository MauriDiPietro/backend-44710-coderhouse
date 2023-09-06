export default class ProductResponseDTO {
    constructor(product) {
        this.nombre = product.name
        this.descripcion = product.description
        this.precio = product.price
    }
}