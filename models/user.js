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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    },
    resetToken: {
        type: Sequelize.STRING,
        allowNull: true
    },
    resetTokenExpiration: {
        type:Sequelize.DATE,
        allowNull: true
>>>>>>> a002784f9860b48564c2825b4149d662a5d15298
=======
>>>>>>> parent of 039df21... added password recovery
    }
})

module.exports = User