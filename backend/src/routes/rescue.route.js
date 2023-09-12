const { Router } = require('express');
const { rescue: constroller } = require('../controllers')

const { getAll, getById, update, create, destroy } = constroller;

const rescue = Router();

rescue
    .get('/', getAll)
    .get('/:id', getById)
    .put('/:id', update)
    .post('/', create)
    .delete('/:id', destroy)

module.exports = rescue;