const { Router } = require('express');
const { user: constroller } = require('../controllers')

const { getAll, getById, update, create, destroy } = constroller;

const user = Router();

user
    .get('/', getAll)
    .get('/:id', getById)
    .put('/:id', update)
    .post('/', create)
    .delete('/:id', destroy)

module.exports = user;