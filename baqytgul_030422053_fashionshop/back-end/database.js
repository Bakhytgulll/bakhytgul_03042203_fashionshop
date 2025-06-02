const sqlite3 = require('sqlite3').verbose();

const database = new sqlite3.Database('mydb.sqlite', (err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

database.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  password text not null
)`);

module.exports = database;
