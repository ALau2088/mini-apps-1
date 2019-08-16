var db = require('../db');

module.exports = {

  transaction: {
    post: function (params, callback){
      var queryStr = 'insert into transactions(name, email, password, address_line1, address_line2, city, state, zip_code, credit_card_num, expiry_date, CVV, billing_zip_code) value(?,?,?,?,?,?,?,?,?,?,?,?)';
      db.query(queryStr, params, function(err, results){
        callback(err, results);
      })
    }
  }
}