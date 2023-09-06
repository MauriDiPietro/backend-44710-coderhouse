import { initMongoDB, disconnectMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const createUser = async(newUser)=>{
    await UserModel.create(newUser);
    console.log('user create ok!');
};

const test = async () => {
    await initMongoDB();

    // const user = {
    //     firstname: 'Juan',
    //     lastname: 'Perez',
    //     email: 'juan@gmail.com',
    //     age: 35
    // }

    const users = [
        {
            firstname: 'Juan',
            lastname: 'Perez',
            email: 'juan@gmail.com',
            age: 35
        },
        {
            firstname: 'Carlos',
            lastname: 'Perez',
            email: 'carlos@gmail.com',
            age: 35
        },
        {
            firstname: 'Alberto',
            lastname: 'Perez',
            email: 'alberto@gmail.com',
            age: 35
        }
    ]

    await createUser(users);
}

test()