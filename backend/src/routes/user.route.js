const { Router } = require('express');
const { user: constroller } = require('../controllers');
const { token } = require('../middlewares');

const { getAll, getById, update, create, destroy } = constroller;

const user = Router();

user
    .get('/', [token, getAll])
    .get('/:id', [token, getById])
    .put('/:id', [token, update])
    .post('/', create)
    .delete('/:id', [token, destroy])

module.exports = user;