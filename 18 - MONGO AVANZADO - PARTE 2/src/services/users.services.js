import UserDaoMongoDB from "../daos/mongodb/users.dao.js";
const userDao = new UserDaoMongoDB();

import fs from 'fs';
import {__dirname} from '../utils.js'
const usersFile = JSON.parse(fs.readFileSync(__dirname+'/data/Users.json', 'utf-8'))

export const createFileUser = async () => {
    try {
      const newUser = await userDao.createUser(usersFile);
      console.log('¡Users saved successfully!');
      if (!newUser) throw new Error("Validation Error!");
      else return { message: '¡Users saved successfully!' };
    } catch (error) {
      console.log(error);
    }
  };

  export const getAllUsers = async(page, limit)=>{
    try {
      const response = await userDao.getAllUsers(page, limit);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  export const aggregation1 = async()=>{
    try {
      const aggregation = await userDao.aggregation1();
      return aggregation
    } catch (error) {
      console.log(error);
    }
  }

  export const updateManyUsers = async ()=>{
    try {
      const response = await userDao.updateManyUsers()
      return response
    } catch (error) {
      console.log(error);
    }
  }
