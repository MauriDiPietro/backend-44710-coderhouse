import { Sequelize } from 'sequelize';

const db = new Sequelize('coderhouse', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;