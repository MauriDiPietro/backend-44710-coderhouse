import UserDaoMongoDB from "../daos/mongodb/users.dao.js";
const userDao = new UserDaoMongoDB();
import fs  from 'fs';
import {__dirname} from '../utils.js';
const usersFile = JSON.parse(fs.readFileSync(__dirname+'/data/Users.json', 'utf-8'));

export const createFileUser = async () => {
  try {
    const newUser = await userDao.createUser(usersFile);
    console.log('¡Users saved!');
    if (!newUser) throw new Error("Validation Error!");
    else return { message: 'Users saved!' };
  } catch (error) {
    console.log(error);
  }
};

export const getByNameUser = async (name) => {
  try {
    const item = await userDao.getUserByName(name);
    if (!item) throw new Error("User not found!");
    else return item;
  } catch (error) {
    console.log(error);
  }
};

export const getByEmailUser = async (email) => {
  try {
    const item = await userDao.getUserByEmail(email);
    if (!item) throw new Error("User not found!");
    else return item;
  } catch (error) {
    console.log(error);
  }
};

export const getByIdUser = async (id) => {
  try {
    const item = await userDao.getUserById(id);
    if (!item) throw new Error("User not found!");
    else return item;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const item = await userDao.getAllUsers();
    if (!item) throw new Error("User not found!");
    else return item;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (obj) => {
  try {
    const newUser = await userDao.createUser(obj);
    if (!newUser) throw new Error("Validation Error!");
    else return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, obj) => {
  try {
    let item = await userDao.getUserById(id);
    if (!item) {
      throw new Error("User not found!");
    } else {
      const userUpdated = await userDao.updateUser(id, obj);
      return userUpdated;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const userDeleted = await userDao.deleteUser(id);
    return userDeleted;
  } catch (error) {
    console.log(error);
  }
};