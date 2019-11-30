const conf = require('./conf');
const str = conf.connStr();
const Sequelize = require('sequelize');

module.exports = new Sequelize(str.dbname, str.username, str.password, {
    host: str.host,
    dialect: 'postgres',
    operatorsAliases: 0,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})
