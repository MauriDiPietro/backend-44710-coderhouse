import { Request, Response, NextFunction } from "express";
import { HttpResponse } from "../utils/http.response";
const httpResponse = new HttpResponse();
import * as service from '../services/product.services';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newProd = await service.create(req.body);
        if(!newProd) return httpResponse.NotFound(res, 'Error creating product');
        else return httpResponse.Ok(res, newProd);
    } catch (error: unknown) {
        next((error as Error).message);
    }
}

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const prods = await service.getAll();
        if(!prods) return httpResponse.NotFound(res, 'Products Not Found');
        return httpResponse.Ok(res, prods);
    } catch (error: unknown) {
        next((error as Error).message);
    }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const prod = await service.getById(id);
        if(!prod) return httpResponse.NotFound(res, 'Product Not Found');
        return httpResponse.Ok(res, prod);
    } catch (error: unknown) {
        next((error as Error).message);
    }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const prod = await service.getById(id);
        if(!prod) return httpResponse.NotFound(res, 'Product Not Found');
        const prodUpd = await service.update(id, req.body);
        if(!prodUpd) return httpResponse.NotFound(res,'Update Error');
        return httpResponse.Ok(res, prodUpd);
    } catch (error: unknown) {
        next((error as Error).message);
    }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const prod = await service.getById(id);
        if(!prod) return httpResponse.NotFound(res, 'Product Not Found');
        const prodDel = await service.remove(id);
        if(!prodDel) return httpResponse.NotFound(res,'Remove Error');
        return httpResponse.Ok(res, 'prod deleted')
    } catch (error: unknown) {
        next((error as Error).message);
    }
}