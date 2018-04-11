const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const port = process.env.PORT || 5050;
const routes = require('./api/routes/routes');

const server = express();
const corsOptions = {
  "origin": "*",
  "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};

server.use(helmet());
server.use(bodyParser.json());
server.use(cors(corsOptions));

mongoose
  .connect("mongodb://localhost/games")
  .then(conn => {
    console.log("Successfully Connected to Games database!");
  })
  .catch(err => {
    console.log("Database connection failed. . .");
  });

routes(server);

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

module.exports = {
  server
};