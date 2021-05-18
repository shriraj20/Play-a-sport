const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('.././db/login.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the login database.');
  });

db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
