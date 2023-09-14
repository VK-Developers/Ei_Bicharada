const { Router } = require('express');
const { product: constroller } = require('../controllers')

const { getAll } = constroller;

const product = Router();

product
    .get('/', getAll)

module.exports = product;