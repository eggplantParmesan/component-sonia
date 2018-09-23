require('dotenv').config();
const cors = require('cors');


const express = require('express');

const app = express();
app.use(cors());

const controllers = require('../database/index.js');

app.use(express.static(`${__dirname}/../client/dist`));
app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});


app.get('/product', (req, res) => {
  controllers.getRelated(req.query.id, (err, results) => {
    if (err) {
      res.status(503).send(err);
    } else {
      return res.json({
        data: results,
      });
    }
  });
});


const PORT = 4043;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
