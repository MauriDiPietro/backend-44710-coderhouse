import { Sequelize } from 'sequelize';
import 'dotenv/config';

const db = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
});

export const initMySqlDB = async () => {
    try {
        await db.sync({ force: false });
        console.log(' >> Conectado a la Base de Datos de MySQL!!');
    } catch (error) {
        console.log(error);
    }
};

export default db;