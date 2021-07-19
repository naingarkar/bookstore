const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookstore'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

let query = "SELECT * FROM books";
connection.query(query, (err,rows) => {
  if(err) throw err;
    else{
      console.log(rows);
      // res.send(rows);
    }        
});