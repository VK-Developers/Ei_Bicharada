const { Router } = require("express");
const { missingAnimal: controller } = require('../controllers')

const { getAll, getById } = controller;

const missingAnimals = Router();

missingAnimals
     .get("/", getAll)
     .get("/:id", getById)

module.exports = missingAnimals;
