const express = require('express');
require('express-async-errors');

const { cors } = require('./tools');
const { user, rescue, product } = require('./routes');
const { errorHandler } = require('./middlewares');

const api = express();
api.use(express.json());
api.use(cors);

api.use('/user', user);
api.use('/rescue', rescue);
api.use('/product', product);

api.use(errorHandler)

module.exports = api;