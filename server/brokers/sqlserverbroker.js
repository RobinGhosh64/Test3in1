'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


const mssql = require('mssql')

let results;

module.exports={
 
    /*
    *  Execute a sql query
    */
   connect2SQLServer: function  () {
       
        //console.log("Executing the sql: " + sqlstatement);
        
        const config = {
            user: process.env.SQL_USERNAME,
            password: process.env.SQL_PASSWORD,
            server: process.env.SQL_SERVER, 
            database: process.env.SQL_DATABASE,
            encrypt: true // use this for Azure database encryption
        }
	    mssql.connect(config).then(() => {

		return mssql.query(`select * from dbo.Transactions`)}).then(result => {

                console.log(result);
                results = result;   // return our result set

	    }).catch(err => {
                console.log('Some error from query going on...', err);
                results = err;      // return any error
        })

        mssql.on('error', err=> {
                // ... sql on error handler
                console.log('Some errorgoing on...', err);
		        results = err;	   // return any error

        })
        return results;
       
       
    }

    


};