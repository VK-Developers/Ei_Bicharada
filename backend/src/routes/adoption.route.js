const { Router } = require("express");
const { adoption: controller } = require('../controllers')

const { getAll, getById } = controller;


const adoption = Router();

adoption
     .get("/", getAll)
     .get("/:id", getById)

module.exports = adoption;
