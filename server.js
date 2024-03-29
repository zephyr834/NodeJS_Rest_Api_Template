const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const routes = require('./app/routes');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
  if(err) return console.log(err);

  routes(app, database);
  app.listen(port, () => {
    console.log("Live on port: " + port);
  })
})