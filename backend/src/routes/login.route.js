const { Router } = require("express");
const { LogIntoApp } = require("../controllers");
const { token } = require('../middlewares')

const login = Router();

login
     .put('/:id', [token, LogIntoApp.update])
     .post("/", LogIntoApp.logIn)
     .delete('/:id', [token, LogIntoApp.destroy])

module.exports = login;
