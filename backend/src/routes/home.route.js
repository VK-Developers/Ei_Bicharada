const { Router } = require("express");
const { home: controller } = require('../controllers');
const { token } = require('../middlewares')

const { getAll, create } = controller;

const home = Router();

home
     .get("/", [token, getAll])
     .post("/", [token, create])

module.exports = home;
