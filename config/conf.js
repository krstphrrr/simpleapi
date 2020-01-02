const str = {dbname:process.env.DB_NAME, username:process.env.DB_USER, password:process.env.DB_PW, port:5432, host:process.env.DB_HOST}
const connStr = () =>{
    return str
};
const connStr2 = () => {
  return process.env.DATABASE_URL;
//   return str;
};

exports.connStr = connStr;
exports.connStr2 = connStr2