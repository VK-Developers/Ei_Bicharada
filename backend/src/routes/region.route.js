const { Router } = require("express");
const { region: controller } = require('../controllers');

const { getAll } = controller;

const region = Router();

region
     .get("/", getAll)

module.exports = region;
