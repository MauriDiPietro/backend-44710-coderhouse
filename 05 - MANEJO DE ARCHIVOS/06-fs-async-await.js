const fs = require('fs');

// const path = './usuarios.json';

class UserManager{
    constructor(){
        this.path = './usuarios.json';
    }

    async createUser(user){
        try {
            const usersFile = await this.getUsers();
            usersFile.push(user);
            await fs.promises.writeFile(this.path, JSON.stringify(usersFile));
        } catch (error) {
            console.log(error);
        }
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
}

const manager = new UserManager();

const usuario1 = {
    nombre:'Esteban',
    apellido:'Suarez',
    edad:35,
    curso:'JS'
}
const usuario2 = {
    nombre:'Luis',
    apellido:'Arrazola',
    edad:28,
    curso:'BackEnd'
}

const test = async() => {
    const get = await manager.getUsers();
    console.log('primer consulta', get);
    await manager.createUser(usuario1);
    const get2 = await manager.getUsers();
    console.log('segunda consulta', get2);
}

test()


//!stringify ---> para guardar la info ---> formato JSON """"
//!parse --> para utilizar la info --> formato javascript