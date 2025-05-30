const express = require("express");
const database = require("./database");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const { name } = req.body;
  database.run("INSERT INTO users (name) VALUES (?)", [name], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

app.get("/users", (req, res) => {
  database.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
