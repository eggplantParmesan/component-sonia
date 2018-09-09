let mysql = require('mysql');
var faker = require('faker');


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'slideShowData'
});

connection.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('DB connected!')
    }
});

const DATA_NUMBER = 100;
const createTable = function () {

    for (var i = 0; i < DATA_NUMBER; i++) {

        var randomProductId = faker.random.number();
        var randomName = faker.commerce.productName();
        var randomDescription = faker.lorem.sentences();
        var randomColor = faker.commerce.color();
        var randomPrice = faker.commerce.price();
        var randomImageURL = faker.image.imageUrl();

        let queryString = `INSERT INTO products (productId, productName, productDescription, color, price, imageURL) \
                            VALUES (${randomProductId}, "${randomName}", "${randomDescription}", "${randomColor}", "${randomPrice}", "${randomImageURL}")`
        connection.query(queryString);
    }
}


createTable();

const getAllData = function (callback) {
    queryString = 'SELECT * FROM products';
    connection.query(queryString, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data)
        }
    })
}

module.exports.getAllData = getAllData;