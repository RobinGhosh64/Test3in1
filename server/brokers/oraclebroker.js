const { getClient } = require('./oracleconnect');

module.exports={

connectOracleServer: function  (query,res) {
       
        
        console.log('Query:' + query);
(async () => {
  const client = await getClient();
         const results = await client.execute(
                  'select current_timestamp from dual'
                );
  const results = await client.query(createTableQuery);
  console.log(`Ran query.`);
  await client.end();
  res.send(results);
})();

  }
};
