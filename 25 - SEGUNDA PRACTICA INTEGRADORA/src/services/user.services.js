import Services from "./class.services.js";
import UserManager from "../daos/mongodb/managers/user.manager.js";

const userManager = new UserManager();

export default class UserService extends Services {
    constructor(){
        super(userManager)
    }

    register = async(user) => {
        try {
            const token = await this.manager.register(user);
            return token;
        } catch (error) {
            console.log(error);
        }
    }

    login = async (user) => {
        try {
            const userExist = await this.manager.login(user);
            return userExist;
        } catch (error) {
            console.log(error);
        }
    }
}