const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'couvoiturage'
});

  console.log("database is connected 👽");


module.exports= connection;