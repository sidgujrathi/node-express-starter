/**
 * This fie is express server file where we cconfigure express server and
 * apollo server as middleware for the same
 */

require('dotenv').config();

// HTTP SERVER
const express = require('express')();
const cors = require('cors');
const compression = require('compression');
const App = require('./src/app');
require('./src/helper/serverCheck')();

const { API_ENDPOINT } = process.env;

express.use(cors({
  origin: '*', // Be sure to switch to your production domain
  optionsSuccessStatus: 200,
}));

express.use(compression());

//Init all controllers and register routes
new App(express);


module.exports = express;
