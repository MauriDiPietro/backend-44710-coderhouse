const fs = require('fs');
const crypto = require('crypto');

const path = './users.json';

class UserManager{
    // constructor(path){
    //     this.path=path
    // }

    async getUsers(){
        if(fs.existsSync(path)){
            const usersFile = await fs.promises.readFile(path, 'utf-8');
            const usersJS = JSON.parse(usersFile);
            return usersJS
        } else {
            return []
        }
    }

    async createUser(obj){
        const { name, firstname, userName, password } = obj;
        const user = {
            name,
            firstname,
            userName,
            password
        }
        const usersFile = await this.getUsers();
        user.salt = crypto.randomBytes(128).toString();
        // console.log(user.salt);
        user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex');
        usersFile.push(user);
        await fs.promises.writeFile(path, JSON.stringify(usersFile));
    }

    async validateUser(userName, password){
        const usersFile = await this.getUsers();
        const user = usersFile.find((u) => u.userName === userName);
        if(!user){
            console.log('Error: user / password incorrect');
            return
        }
        const newCrypto = crypto.createHmac('sha256', user.salt).update(password).digest('hex');
        if(user.password === newCrypto){
            console.log('User login ok!');
        } else {
            console.log('Error: user / password incorrect');
        }
    }
};

const manager = new UserManager();

const user1 = {
    name: 'Juan',
    firstname: 'Perez',
    userName: 'jperez',
    password: '1234'
}

async function test(){
    await manager.createUser(user1);
    const users = await manager.getUsers();
    console.log(users);
    await manager.validateUser('jperez', '1234')
}

test()