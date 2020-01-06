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
    }
})

module.exports = User