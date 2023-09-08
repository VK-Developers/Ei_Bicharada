const { Router } = require('express');
const { rescue: constroller } = require('../controllers')

const { getAll } = constroller;

const rescue = Router();

rescue
    .get('/', getAll)

module.exports = rescue;