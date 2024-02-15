const { Router } = require('express');
const { raffle: controller } = require('../controllers');
const { token } = require('../middlewares');

const { getAll, getById } = controller;

const raffle = Router();

raffle
    .get('/', [token, getAll])
    .get('/:id', [token, getById])

module.exports = raffle;