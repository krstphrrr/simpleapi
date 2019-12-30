const Sequelize = require('sequelize')
const db = require("../config/database");

const Geonote = db.define("geonote", {
  nid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userid: {
    type: Sequelize.STRING,
    allowNull:false
  },
  txt: {
    type: Sequelize.STRING,
    allowNull: false
  },
  geom: {
    type: Sequelize.GEOMETRY('Point', 4326),
    allowNull: false
  }
});

module.exports = Geonote


