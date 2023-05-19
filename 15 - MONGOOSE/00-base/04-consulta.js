import { initMongoDB, disconnectMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const test = async()=>{
    await initMongoDB();

    const q1 = await UserModel.find();
    console.log('consulta 1: ');
    console.log(q1);

    const q2 = await UserModel.find({ age: { $gt: 35 } });
    console.log('consulta 2: ');
    console.log(q2);

    const q3 = await UserModel.find({ $and: [ {age: { $gte: 35 }}, {admin: true} ] });
    console.log('consulta 3: ');
    console.log(q3);
}

test()