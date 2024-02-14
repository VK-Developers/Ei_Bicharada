const { Router } = require("express");
const { adoption: controller } = require('../controllers');
const { token, upload } = require('../middlewares');

const { getAll, getById, create, update, destroy } = controller;

const adoption = Router();

adoption
     .get("/", [token, getAll])
     .get("/:id", [token, getById])
     .put('/:id', [token, update])
     .post("/", [token, upload.single('file'), create])
     .delete('/:id', [token, destroy])

module.exports = adoption;
