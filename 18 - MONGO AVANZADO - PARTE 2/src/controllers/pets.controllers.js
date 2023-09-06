import * as service from '../services/pets.services.js';

export const addPetToUser = async (req, res, next) => {
    try {
      const { idUser } = req.params;
      const { idPet } = req.params;
      const newUser = await service.addPetToUser(idUser, idPet);
      if (!newUser) throw new Error("Validation Error!");
      else
        res.json(newUser);
    } catch (error) {
      next(error);
    }
  };

  export const getByIdPet = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await service.getByIdPet(id);
      if (!item) throw new Error("Pet not found!");
  
      res.json(item);
    } catch (error) {
      next(error);
    }
  };

  export const createPet = async (req, res, next) => {
    try {
        const pet = {...req.body}
      const newUser = await service.createPet(pet);
      if (!newUser) throw new Error("Validation Error!");
      else
        res.json({
          data: newUser,
        });
    } catch (error) {
      next(error);
    }
  };

