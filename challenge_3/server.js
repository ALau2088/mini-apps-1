const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;

// Load models
const models = require('./model')

// Body-parser
const bodyParser = require('body-parser')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.render('index'))

app.post('/transaction', (req, res) => {
  console.log(req.body);
  const params = [
    req.body.name, 
    req.body.email,
    req.body.password,
    req.body.address_line1,
    req.body.address_line2,
    req.body.city,
    req.body.state,
    req.body.zip_code,
    req.body.credit_card_num,
    req.body.expiry_date,
    req.body.CVV,
    req.body.billing_zip_code
  ]
  models.transaction.post(params, function(err, results) {
    if (err){throw err}
    res.end('Transaction Submitted')
  })
})

app.listen(port, () => console.log(`Listening on port ${port}...`))

