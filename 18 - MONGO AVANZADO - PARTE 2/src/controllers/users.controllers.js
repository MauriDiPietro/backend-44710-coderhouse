import * as service from "../services/users.services.js";
  
  export const createFileCtr = async (req, res, next) => {
    try {
      const newUser = await service.createFileUser();
      if (!newUser) throw new Error("Validation Error!");
      else
        res.json(newUser);
    } catch (error) {
      next(error);
    }
  };

  export const getAllUsers = async(req, res, next)=>{
    try {
      const { page, limit } = req.query;
      const response = await service.getAllUsers(page, limit);
      // res.json(response);
      const next = response.hasNextPage ? `http://localhost:8080/users?page=${response.nextPage}` : null
      const prev = response.hasPrevPage ? `http://localhost:8080/users?page=${response.prevPage}` : null
      res.json({
        results: response.docs,
        info: {
          count: response.totalDocs,
          pages: response.totalPages,
          next,
          prev
        }
      });
    } catch (error) {
      next(error)
    }
  }

  export const aggregation1 = async(req, res, next)=>{
    try {
      // const {gender} = req.query
      const response = await service.aggregation1();
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  export const updateManyUsers = async(req, res, next) => {
    try {
      const response = await service.updateManyUsers()
      res.json(response)
    } catch (error) {
      next(error)
    }
  }
