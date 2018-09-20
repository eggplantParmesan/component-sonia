const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'slideShowData',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DB connected!');
  }
});

const getRelated = (id, callback) => {
  const queryString = `select * from products where id in (select relatedItemId from similarProducts where productId=${id})`;
  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports.getRelated = getRelated;
