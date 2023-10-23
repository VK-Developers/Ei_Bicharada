const { Router } = require("express");
const { victim: controller } = require('../controllers');
const { token } = require('../middlewares')

const { getAll, create } = controller;

const victim = Router();

victim
     .get("/", [token, getAll])
     .post("/", [create])

module.exports = victim;
