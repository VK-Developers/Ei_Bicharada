const { Router } = require('express');
const { products: constroller } = require('../controllers')

const { getAll } = constroller;

const products = Router();

products
    .get('/', getAll)

module.exports = products;