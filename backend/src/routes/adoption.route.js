const { Router } = require("express");
const { adoption: controller } = require('../controllers');
const { token, uploadPicture } = require('../middlewares');

const { getAll, getById, create } = controller;

const adoption = Router();

adoption
     .get("/", [token, getAll])
     .get("/:id", [token, getById])
     .post("/", [token, uploadPicture.single('file'), create])

module.exports = adoption;
