const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Get all products
app.get('/products', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create a new product
app.post('/products', async (req, res) => {
  try {
    const {id, name, isHazardous, sizePerUnit} = req.body;
    const result = await db.query(
      'INSERT INTO products (id, name, isHazardous, sizePerUnit) VALUES ($1, $2, $3, $4) RETURNING *',
      [id, name, isHazardous, sizePerUnit]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error: ${err}`);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});