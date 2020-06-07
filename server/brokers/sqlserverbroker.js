'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


const mssql = require('mssql')

let result;

module.exports={
 
    /*
    *  Execute a sql query
    */
   connect2SQLServer: async function  () {
       
        //console.log("Executing the sql: " + sqlstatement);
        
        const config = {
            user: process.env.SQL_USERNAME,
            password: process.env.SQL_PASSWORD,
            server: process.env.SQL_SERVER, 
            database: process.env.SQL_DATABASE,
            enableArithAbort:true,
            encrypt: true // use this for Azure database encryption
        }
        try {
            mssql.connect(config)
            result = mssql.query`select * from dbo.Transactions`
        }
        catch (error) {
            console.log(error) 
            return error;
        }   
        return result;
       
       
    }

    


};