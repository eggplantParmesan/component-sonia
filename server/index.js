const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controllers = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use((req, res, next) => {
    console.log(`${req.method} request received at ${req.url}`);
    next();
});

app.get('/carousel', function (req, res) {
    controllers.getAllData(function (err, data) {
        if (err) {
            res.status(503).send(err)
        } else {
            res.send(data);
        }
    })
})


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`)
})