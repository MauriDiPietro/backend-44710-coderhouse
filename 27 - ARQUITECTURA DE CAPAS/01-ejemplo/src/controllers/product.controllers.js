import { saveServ, getAllServ } from "../services/product.services.js";

export const saveProd = async(req, res)=>{
    try {
        const {body} = req;
        const prod = await saveServ(body);
        res.json(prod);
    } catch (error) {
        console.log(error);
    }
}

export const getAllProd = async(req, res)=>{
    try {
        const prods = await getAllServ()
        res.json(prods);
        
    } catch (error) {
        console.log(error);
    }
}