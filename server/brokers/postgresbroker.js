const { getClient } = require('./postgresconnect');

module.exports={

connectPGServer: function  (query,res) {
       
        
        console.log('Query:' + query);
(async () => {
  const client = await getClient();
  let createTableQuery = `
    CREATE TABLE IF NOT EXISTS my_table(
      id BIGSERIAL PRIMARY KEY NOT NULL ,
      name varchar,
      date TIMESTAMP NOT NULL DEFAULT current_timestamp
    );
  `;
  const results = await client.query(createTableQuery);
  console.log(`Created table.`);
  await client.end();
  res.send(results);
})();

  }
};
