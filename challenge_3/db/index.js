var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '123456'
})

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS purchases', function (error, results, fields) {
  if (error) throw error;
})

connection.query('USE purchases', function (error, results, fields) {
  if (error) throw error;
})

// Create transactions database
connection.query('CREATE TABLE IF NOT EXISTS transactions (name VARCHAR(20), email VARCHAR(50), password VARCHAR(20), address_line1 VARCHAR(20), address_line2 VARCHAR(20), city VARCHAR(20), state VARCHAR(20), zip_code VARCHAR(20), credit_card_num VARCHAR(20), expiry_date VARCHAR(20), CVV VARCHAR(20), billing_zip_code VARCHAR(20))', function (error, results, fields) {
  if (error) throw error;
})

module.exports = connection;