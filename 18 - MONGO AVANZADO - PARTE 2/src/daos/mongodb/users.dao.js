import { getRandomDate, getRandomNumber } from "../../utils.js";
import { UserModel } from "./models/user.model.js";

export default class UserDaoMongoDB {

  async createUser(obj) {
    try {
      const response = await UserModel.create(obj);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllUsers(page = 1, limit = 10) {
    try {
      const response = await UserModel.paginate({}, { page, limit });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async aggregation1(){ //(gender)
    try {
      const response = await UserModel.aggregate([  //pipelane
      //stage:
        {
          $match: {
                    //  gender: `${gender}`,
                     age: { $gte: 18 } 
                  }
        },
        //stage:
        {
          $group: {
            _id: '$gender',
            average_age: { $avg: '$age' },
            count: { $sum: 1 },
            youngest: { $min: '$age' },
            oldest: { $max: '$age' }
          }
        },
        //stage:
        {
          $sort: {
            average_age: 1
          }
        }
      ])
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateManyUsers(){
    try {
      const users = await UserModel.find({});
      users.forEach((user)=>{
        user.age = getRandomNumber()
        user.date = getRandomDate()
        user.save()
      })
      return { message: 'updated ok' }
    } catch (error) {
      console.log(error);
    }
  }

}

