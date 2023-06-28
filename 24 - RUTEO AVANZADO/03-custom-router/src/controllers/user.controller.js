import UserDao from "../daos/user.dao.js";
import { generateToken } from "../jwt/auth.js";
const userDao = new UserDao();

export const register = async(req, res, next)=>{
    try {
      const { first_name, last_name, email, age, password } = req.body;
      const exist = await userDao.getByEmail(email);
      if(exist) return res.failure(400, 'user already exists');
      const user = {first_name, last_name, email, age, password}
      const newUser = await userDao.createUser(user);
      const token = generateToken(newUser);
      res.success(200, token)
    } catch (error) {
        next(error);
    }
};

export const login = async(req, res, next)=>{
    try {
     const { email, password } = req.body;
     const user = await userDao.loginUser({email, password});
     if(!user) res.failure(401, 'invalid credentials');
     const access_token = generateToken(user);
     res.header('authorization', access_token).success(200, access_token)
    } catch (error) {
        next(error);
    }
}

export const profile = (req, res, next)=>{
  try {
    const { first_name, last_name, email, role } = req.user;
    res.success(200, 
      {
        first_name, 
        last_name, 
        email, 
        role
      }
    )
  } catch (error) {
    next(error);
  }
}

