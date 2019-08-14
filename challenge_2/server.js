const express = require('express');
const app = express();
const port =3000
const fs = require('fs')

// Body Parser Middleware
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

// Serve client files
app.use(express.static('client'))

app.get('/', (req, res) => res.render('./index'))

app.get('/csv', (req, res) => res.send('Hello World'))

app.post('/csv', (req, res) => {
    // console.log(req.body.json)
    const data = JSON.parse(req.body.json);
    console.log(data)
    fs.writeFile('sales_report1.csv', data, 'utf8', (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      res.redirect('/')
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


