const { Router } = require('express');
const { sponsor: constroller } = require('../controllers');
const { token } = require('../middlewares');

const { getAll } = constroller;

const sponsor = Router();

sponsor
    .get('/', [token, getAll])

module.exports = sponsor;