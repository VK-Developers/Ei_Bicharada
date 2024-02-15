const { Router } = require("express");
const { contribution: controller } = require('../controllers');
const { token } = require('../middlewares')

const { getAll } = controller;

const contribution = Router();

contribution
     .get("/", [token, getAll])

module.exports = contribution;
