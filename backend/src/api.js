const express = require("express");
require("express-async-errors");
const { user, rescue, product, login, adoption } = require("./routes");

const { cors } = require("./tools");
const { errorHandler } = require("./middlewares");

const api = express();
api.use(express.json());
api.use(cors);

api.use("/login", login);
api.use("/users", user);
api.use("/adoptions", adoption);
// api.use("/lost-animals", lostAnimal);
api.use("/rescues", rescue);
// api.use("/complaints", complaint);
// api.use("/home", home);
api.use("/products", product);
// api.use("/news-events", newEvent);
// api.use("/sponsors", sponsors);

api.use(errorHandler);

module.exports = api;
