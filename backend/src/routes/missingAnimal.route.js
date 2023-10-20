const { Router } = require("express");
const { missingAnimal: controller } = require('../controllers');
const { token } = require('../middlewares')

const { getAll, getById, create } = controller;

const missingAnimals = Router();

missingAnimals
     .get("/", [token, getAll])
     .get("/:id", [token, getById])
     .post("/", [token, create])

module.exports = missingAnimals;
