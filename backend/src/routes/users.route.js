const { Router } = require('express');
const { users: constroller } = require('../controllers')

const { getAll, getById, update, create, destroy } = constroller;

const users = Router();

users
    .get('/', getAll)
    .get('/:id', getById)
    .put('/:id', update)
    .post('/', create)
    .delete('/:id', destroy)

module.exports = users;