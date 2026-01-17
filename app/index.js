
const mysql = require('mysql2');
const express = require('express');

const app = express();

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: 'testdb'
});

app.get('/', (req, res) => {
  db.query('SELECT "Docker Compose is working!" AS message', (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
