const {Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  port: 5432
})

// drop base if exists and create new one
pool.query('DROP DATABASE IF EXISTS testdb', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Database dropped');
  pool.query('CREATE DATABASE testdb', (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Database created');
  });
});

// Drop product table if exists
pool.query('DROP TABLE IF EXISTS products', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Table dropped');
  pool.query('CREATE TABLE products (id BIGINT, name VARCHAR(50), isHazardous BOOLEAN, sizePerUnit NUMERIC)', (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Table created');
  });
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};