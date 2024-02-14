const { Router } = require("express");
const { victim: controller } = require('../controllers');
const { token } = require('../middlewares')

const { getAll, create, destroy } = controller;

const victim = Router();

victim
     .get("/", [token, getAll])
     .post("/", [token, create])
     .delete('/:id', [token, destroy])

module.exports = victim;
