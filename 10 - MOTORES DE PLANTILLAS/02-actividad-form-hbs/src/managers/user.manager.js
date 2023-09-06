import fs from 'fs';

export default class UserManager{
    constructor(path){
        this.path = path;
    }
    
    async createUser(obj){
        try {
           
            const user = {
                id: await this.#getMaxId() + 1,
               ...obj
            }
            const usersFile = await this.getUsers();
            usersFile.push(user);
            await fs.promises.writeFile(this.path, JSON.stringify(usersFile));
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async #getMaxId() {
        let maxId = 0;
        const users = await this.getUsers();
        users.map((user) => { 
          if (user.id > maxId) maxId = user.id;                                       
        });
        return maxId;
      }

    async getUsers(){
        try {
            if (fs.existsSync(this.path)){
                const users = await fs.promises.readFile(this.path, 'utf8');
                const usersJS = JSON.parse(users);
                return usersJS;
            } else {
                return []
            }
        } catch (error) {
          console.log(error);  
        }
    }

    async getUserById(id) {
        const usersFile = await this.getUsers()
        const user = usersFile.find((u) => u.id === id)
        if (user) {
          return user
        }
        return false
      }

      async updateUser(obj, id){
        try {
            const usersFile = await this.getUsers();    //nos traemos la lectura del array
            const index = usersFile.findIndex(user => user.id === id)   //devuelve el indice, la posicion
            if(index === -1){   //si el indice no existe
                throw new Error(`Id ${id} not found`)
            } else {
                usersFile[index] = { ...obj, id };
            } 
            await fs.promises.writeFile(this.path, JSON.stringify(usersFile));
        } catch (error) {
            console.log(error);
        }
    }

      async deleteUser(id){
        const usersFile = await this.getUsers()
        if(usersFile.length > 0) {
            const newArray = usersFile.filter(u=>u.id!== id)
            await fs.promises.writeFile(this.path, JSON.stringify(newArray))
        } else {
            throw new Error(`User not found`)
        }
      }

      async deleteUsers(){
        if(fs.existsSync(this.path)){
            await fs.promises.unlink(this.path)
        }
      }
}

