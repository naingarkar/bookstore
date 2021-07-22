const mysql = require('mysql');
const dbConfig = require("../config/db.config.js");

const conn = mysql.createConnection({
  host: dbConfig.HOST,    // Replace with your host name
  user: dbConfig.USER,         // Replace with your database username
  password:  dbConfig.PASSWORD,       // Replace with your database password
  database: dbConfig.DB // Replace with your database Name
});
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;