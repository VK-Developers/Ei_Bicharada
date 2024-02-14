const { Router } = require('express');
const { information: constroller } = require('../controllers');

const { getAll } = constroller;

const information = Router();

information
    .get('/', getAll)

module.exports = information;