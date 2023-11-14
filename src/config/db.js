require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employeedb'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connection worked.');
});

module.exports = connection;
