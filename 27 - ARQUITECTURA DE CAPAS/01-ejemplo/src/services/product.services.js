import { save, getAll } from "../daos/persistence.js";

export const saveServ = async(obj) => {
    const prod = await save(obj);
    return prod
}

export const getAllServ = async() => {
    const prods = await getAll();
    return prods;
}