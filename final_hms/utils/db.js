const mdb = require('mysql');

const db = mdb.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'password',
    database: 'hms'
});

db.connect((err) => {
    if(err) throw err;
    console.log("Database connection established - MYSQL");
});

module.exports = db;