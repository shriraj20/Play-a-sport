const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('.././db/login.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the login database.');
});

let usernames = [];

db.serialize(() => {
  db.each(`SELECT * FROM User`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log("ID:" + row.ID + "\nUsername:"+ row.Username + "\nPassword:" + row.Password + "\nAdmin:" + row.Admin);
    usernames.push(row.Username);
    console.log(usernames);
  });
});

var vOneLS = localStorage.getItem("vOneLocalStorage ");

if(usernames.contains(vOneLS)) {
  var booleanValue = "true";
  localStorage.setItem("trueORFalse", booleanValue);
}

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});