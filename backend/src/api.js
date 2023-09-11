const express = require('express');
require('express-async-errors');

const { cors } = require('./tools');
const { users, rescue, products } = require('./routes');
const { errorHandler } = require('./middlewares');

const api = express();
api.use(express.json());
api.use(cors);

api.use('/users', users);
// api.use('/rescue', rescue);
// api.use('/products', products);

api.use(errorHandler)

module.exports = api;