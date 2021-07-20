// // include all required modules
// var http = require('http');
// const express = require('express');
// var bodyParser = require('body-parser');
// const mysql = require('mysql');

// // server details
// const app = express();
// const port = 3000;

// // Static Files
// app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/images', express.static(__dirname + 'public/images'))
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());       // to support JSON-encoded bodies
// app.use(express.urlencoded()); // to support URL-encoded bodies

// app.get('', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'bookstore'
// });

// // connect to database
// conn.connect((err) => {
//     if (err) throw err;
//     console.log('Connected!');
// });

// app.get('/', async (req, res) => {
//     let query = "SELECT * FROM books";
//     conn.query(query, (err,rows) => {
//         if(err) throw err;
//         else{
//             console.log(rows);
//             res.send(rows);
//         }        
//     });
// });

// // Listen on port
// app.listen(port, () => console.info(`Listening on port ${port}`));