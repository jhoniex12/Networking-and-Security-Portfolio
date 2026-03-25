const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config();


const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// ✅ MySQL RDS Connection
const db = mysql.createConnection({
  host: 'techgear-server.mysql.database.azure.com',
  user: 'ifkwcvmalg',
  password: '@Sheen121416',
  database: 'TechGear',
  ssl: {
    rejectUnauthorized: false
  }
});


db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err.stack);
    return;
  }
  console.log('Connected to RDS DB.');
});

// ✅ Route to add customer
app.post('/customers', (req, res) => {
  const { name, address, city, state, email, phone } = req.body;

  const query = `INSERT INTO customer_records (name, address, city, state, email, phone)
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [name, address, city, state, email, phone], (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).send('Error inserting customer');
    }
    res.status(201).send({ message: 'Customer added', customerId: result.insertId });
  });
});

// ✅ Route to get all customers
app.get('/customers', (req, res) => {
  db.query('SELECT * FROM customer_records', (err, results) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).send('Error retrieving customers');
    }
    res.status(200).json(results);
  });
});

// ✅ Route to delete a customer using route parameter (ID)
app.delete('/customers/:id', (req, res) => {
  const customerId = req.params.id;

  const query = 'DELETE FROM customer_records WHERE id = ?';

  db.query(query, [customerId], (err, result) => {
    if (err) {
      console.error('Delete error:', err);
      return res.status(500).send('Error deleting customer');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Customer not found');
    }

    res.status(200).send({ message: `Customer ID ${customerId} deleted.` });
  });
});


// ✅ Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
