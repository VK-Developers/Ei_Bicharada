const { Router } = require("express");
const { missingAnimal: controller } = require('../controllers');
const { token } = require('../middlewares')

const { getAll, getById } = controller;

const missingAnimals = Router();

missingAnimals
     .get("/", [token, getAll])
     .get("/:id", [token, getById])

module.exports = missingAnimals;
