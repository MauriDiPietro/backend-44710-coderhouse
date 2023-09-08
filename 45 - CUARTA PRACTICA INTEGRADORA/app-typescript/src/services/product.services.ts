import { Product } from "../interfaces/product.interface";
import { ProductModel } from "../models/product.model";

export const create = async (product: Product): Promise<Product | boolean> => {
    try {
        const prod = await ProductModel.create(product);
        if(!prod) return false;
        return prod;
    } catch (error: unknown) {
        throw new Error((error as Error).message)
    }
};

export const getAll = async (): Promise<Product[] | []> => {
    try {
        return await ProductModel.find({});
    } catch (error: unknown) {
        throw new Error((error as Error).message)
    }
};

export const getById = async (id: string): Promise<Product | boolean> => {
    try {
        const prod = await ProductModel.findById(id);
        if(!prod) return false;
        return prod;
    } catch (error: unknown) {
        throw new Error((error as Error).message)
    }
};

export const update = async (id: string, body: Product): Promise<Product | boolean> => {
    try {
        const updProd = await ProductModel.findByIdAndUpdate(id, body, { new: true });
        if(!updProd) return false;
        return updProd;
    } catch (error: unknown) {
        throw new Error((error as Error).message)
    }
};

export const remove = async (id: string): Promise<Product | boolean> => {
    try {
        const delProd = await ProductModel.findByIdAndDelete(id);
        if(!delProd) return false;
        return delProd;
    } catch (error: unknown) {
        throw new Error((error as Error).message)
    }
};

