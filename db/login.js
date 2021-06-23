const sqlite3 = require('sqlite3').verbose();
<<<<<<< HEAD:db/login.js
let db = new sqlite3.Database('../db/login.db', (err) => {
=======
let db = new sqlite3.Database('.././db/login.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the login database.');
});

let usernames = [];

db.serialize(() => {
  db.each(`SELECT * FROM User`, (err, row) => {
>>>>>>> origin/master:js/login.js
    if (err) {
      console.error(err.message);
    }else {
      console.log('Connected to the login database.');
    }
<<<<<<< Updated upstream
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
=======
});
>>>>>>> Stashed changes

db.close((err) => {
  if (err) {
    return console.error(err.message);
<<<<<<< Updated upstream
  }
  console.log('Closed the database connection.');
=======
  }else{
    console.log('Close the database connection.');
  }
>>>>>>> Stashed changes
});