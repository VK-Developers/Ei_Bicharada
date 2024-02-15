const { Router } = require("express");
const { missingAnimal: controller } = require('../controllers');
const { token, upload } = require('../middlewares')

const { getAll, getById, create, update, destroy } = controller;

const missingAnimals = Router();

missingAnimals
     .get("/", [token, getAll])
     .get("/:id", [token, getById])
     .put('/:id', [token, update])
     .post("/", [token, upload.single('file'), create])
     .delete('/:id', [token, destroy])

module.exports = missingAnimals;
