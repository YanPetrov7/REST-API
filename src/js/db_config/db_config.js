const mysql = require('mysql');

const db = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'Yan1234#$',
    database: 'database1'
});

db.connect((err) => {
    if (!err){
        console.log('Connected to the database');
    } else {
        console.log(err);
    }
});

module.exports = db;