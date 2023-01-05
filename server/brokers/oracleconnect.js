const { Client } = require('oracledb');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports.getClient = async () => {
  

let conn;
    try {
        conn = await oracledb.getConnection({ user: 'OT', password: 'mypassword', connectString: 'localhost:1521/orcl' });
        console.log(conn);
    }
    catch (err) {
        console.error(err);
    } finally {
    }
  return conn;
};