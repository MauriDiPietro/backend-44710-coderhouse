export interface Product {
    name: string;
    description: string;
    price: number;
    stock: number;
};

export interface ProductDB extends Product {
        _id: string;
        _v: number;
}

// export type ProductType = {
//     name: string;
//     description: string;
//     price: number;
//     stock: number;
// };

// interface Product2 extends Product {
//     color: string;
// }

// type ProductType2 = ProductType & {
//     color: string;
// }

// export type Product3 = Pick<Product, 'name' | 'description'>    //name, description

// export type Product4 = Omit<Product, 'name' | 'description'>    //price, stock