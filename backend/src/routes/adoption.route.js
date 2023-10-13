const { Router } = require("express");
const { adoption: controller } = require('../controllers');
const { token } = require('../middlewares');

const { getAll, getById } = controller;

const adoption = Router();

adoption
     .get("/", [token, getAll])
     .get("/:id", [token, getById])

module.exports = adoption;
