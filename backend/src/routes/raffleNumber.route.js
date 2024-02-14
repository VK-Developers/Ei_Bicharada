const { Router } = require('express');
const { raffleNumber: controller } = require('../controllers');
const { token } = require('../middlewares');

const { getAll, getById, create } = controller;

const raffleNumber = Router();

raffleNumber
    .get('/', [token, getAll])
    .get('/:id', [token, getById])
    .post('/', create)

module.exports = raffleNumber;