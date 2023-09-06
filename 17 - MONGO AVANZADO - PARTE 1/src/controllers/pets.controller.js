import * as service from '../services/pets.services.js';

export const addPetToUser = async (req, res, next) =>{
    try {
        const { idUser } = req.params;
        const { idPet } = req.params;
        const newPet = await service.addPetToUser(idUser, idPet);
        res.json(newPet);
    } catch (error) {
        next(error);
    }
}

export const getByIdPet = async (req, res, next) =>{
    try {
       const { id } = req.params;
       const pet = await service.getByIdPet(id);
       if(!pet) throw new Error('Pet not found')
       else res.json(pet);
    } catch (error) {
        next(error);
    }
}

export const createPet = async (req, res, next) =>{
    try {
       const pet = { ...req.body };
       const newPet = await service.createPet(pet);
       if(!newPet) throw new Error('Validation error')
       else res.json(newPet);
    } catch (error) {
        next(error);
    }
}

