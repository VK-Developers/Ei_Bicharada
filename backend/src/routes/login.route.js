const { Router } = require("express");
const { LogIntoApp } = require("../controllers");

const login = Router();

login
     .post("/", LogIntoApp);

module.exports = login;
