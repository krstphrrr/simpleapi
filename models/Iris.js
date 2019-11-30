const Sequelize = require('sequelize');
const db = require('../config/database');

const Iris = db.define('iris', {
    sepal_length:{
        type: Sequelize.NUMBER
    },
    sepal_width: {
        type: Sequelize.NUMBER
    },
    petal_length: {
        type: Sequelize.NUMBER
    },
    petal_width: {
        type: Sequelize.NUMBER
    },
    species: {
        type: Sequelize.TEXT
    }
})
module.exports = Iris;