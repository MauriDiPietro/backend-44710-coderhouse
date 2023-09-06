import { initMongoDB, disconnectMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const test = async() => {
    await initMongoDB()

    const idDoc = '6466b1de59553c6548dedb53';

    const upd = await UserModel.findByIdAndUpdate(
        idDoc,
        { email: 'nuevoemail@gmail.com' },
        { new: true }
    )

    console.log(upd);
}

test()