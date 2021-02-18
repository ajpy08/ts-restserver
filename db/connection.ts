import {Sequelize} from 'sequelize'

const db = new Sequelize('node', 'root', 'fmat*0348', {
    host: '127.0.0.1',
    port: 3307,
    dialect: 'mysql',
    // logging: false,
});

export default db;