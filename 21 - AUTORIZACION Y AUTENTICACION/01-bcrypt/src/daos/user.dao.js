import { userModel } from './models/user.model.js';
import { createHash, isValidPassword } from '../utils.js';

export default class UserDao {
  async createUser(user) {
    try {
      const { first_name, last_name, email, age, password } = user;
      const existUser = await userModel.find({email});
      if(existUser.length === 0){
        if(email === 'adminCoder@coder.com' && password === 'adminCoder123'){
          const newUser = await userModel.create({...user, password: createHash(password), role: 'admin'});
          return newUser;
        } else {
          const newUser = await userModel.create({...user, password: createHash(password)})
          return newUser
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  async loginUser(user){
    try {
      const { email, password } = user;
      const userExist = await userModel.findOne({email}); 
      if(userExist){
        const passValid = isValidPassword(password, userExist);
        if(!passValid) return false
        else return userExist;
      } return false
      // !passValid ? false : userExist
    } catch (error) {
      console.log(error);
    }
  }
}
