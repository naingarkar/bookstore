const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',    // Replace with your host name
  user: 'root',         // Replace with your database username
  password: '',         // Replace with your database password
  database: 'bookstore' // Replace with your database Name
});
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;

// let query = "SELECT * FROM books";
// connection.query(query, (err,rows) => {
//   if(err) throw err;
//     else{
//       console.log(rows);
//       // res.send(rows);
//     }        
// });