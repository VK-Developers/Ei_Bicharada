const { Router } = require('express');
const { complain: controller } = require('../controllers');
const { token } = require('../middlewares');

const { getAll, getById, update, create, destroy } = controller;

const complain = Router();

complain
    .get('/', [token, getAll])
    .get('/:id', [token, getById])
    .put('/:id', [token, update])
    .post('/', [token, create])
    .delete('/:id', [token, destroy])

module.exports = complain;