const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
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
  const queryString = `select * from products where id in (select relatedItemId from similarProducts where productId= ?)`;
  connection.query(queryString, [id], callback);
};

module.exports.getRelated = getRelated;
