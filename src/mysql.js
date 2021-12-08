const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "desafio"
});

pool.getConnection((err) => {
    if (err) {
        return console.error('error connecting: ' + err.stack);
    }
    console.log('Connected to database on port 3306');
});

exports.pool = pool;