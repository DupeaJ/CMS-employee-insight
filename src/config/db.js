require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employeedb'
});

db.connect(err => {
    if (err) throw err;
    console.log('connection worked.');
});

module.exports = db;
