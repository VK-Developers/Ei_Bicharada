const { Router } = require('express');
const { newEvent: constroller } = require('../controllers');
const { token } = require('../middlewares');

const { getAll } = constroller;

const newEvent = Router();

newEvent
    .get('/', [token, getAll])

module.exports = newEvent;