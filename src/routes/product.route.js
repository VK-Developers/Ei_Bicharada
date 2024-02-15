const { Router } = require('express');
const { product: constroller } = require('../controllers');
const { token } = require('../middlewares');

const { getAll } = constroller;

const product = Router();

product
    .get('/', [token, getAll])

module.exports = product;