import { userModel } from './models/user.model.js'

export default class UserDao {
  async createUser(user) {
    try {
      const { email, password } = user;
      const existUser = await userModel.find({email});
      if(existUser.length === 0){
        if(email === 'adminCoder@coder.com' && password === 'adminCoder123'){
          return await userModel.create({...user, role: 'admin'});
        } else {
          const newUser = await userModel.create(user);
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
      const userExist = await userModel.find({email, password});
      if(userExist.length !== 0){
        return userExist
      } else {
        return null
      }
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
}
