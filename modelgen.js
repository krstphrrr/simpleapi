const conf = require('./config/conf');
const str = conf.connStr();
const SequelizeAuto = require('sequelize-auto')
const auto = new SequelizeAuto('gisdb', str.username, str.password);

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});

// With options:
const auto = new SequelizeAuto('gisdb', str.username, str.password, {
    host: str.host,
    dialect: 'postgres',
    directory: false, // prevents the program from writing to disk
    port: str.port,
    additional: {
        timestamps: false
        //...
    },
    // tables: ['table1', 'table2', 'table3']
    //...
})