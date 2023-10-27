const { Router } = require("express");
const { home: controller } = require('../controllers');
const { token } = require('../middlewares')

const { getAll, create, destroy, update } = controller;

const home = Router();

home
     .get("/", [token, getAll])
     .post("/", [token, create])
     .put('/:id', [token, update])
     .delete('/:id', [token, destroy])

module.exports = home;
