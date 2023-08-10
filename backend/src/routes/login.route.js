const express = require("express");

const { newLogin, createUser } = require("../middleware");

const Router = express.Router();

Router
      .route("/")
            .post(newLogin)
            .put(createUser)

module.exports = Router;
