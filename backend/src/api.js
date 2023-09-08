const express = require('express');
require('express-async-errors');

const { cors } = require('./tools');
const { rescue } = require('./routes');
const { errorHandler } = require('./middlewares');

const api = express();
api.use(express.json());
api.use(cors);

api.use('/rescue', rescue);

api.use(errorHandler)

module.exports = api;