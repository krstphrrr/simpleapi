const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("user",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false

    },
    resetToken: {
        type: Sequelize.STRING,
        allowNull: true
    },
    resetTokenExpiration: {
        type:Sequelize.DATE,
        allowNull: true
    }
})

module.exports = User