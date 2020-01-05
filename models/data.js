const Sequelize = require('sequelize')
const db = require("../config/database")

const Datatable = db.define("Datatable", {
    id: {
        type: Sequelize.INTEGER,
        autoIncremente: true,
        allowNull: false,
        primaryKey: true
    },
    measure1: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    factor1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Datatable