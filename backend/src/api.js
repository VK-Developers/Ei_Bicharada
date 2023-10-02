const express = require("express");
require("express-async-errors");
const { user, rescue, product, login } = require("./routes");

const { cors } = require("./tools");
const { errorHandler } = require("./middlewares");

const api = express();
api.use(express.json());
api.use(cors);

// Login Route
api.use("/login", login);
// Usage Routes
api.use("/users", user);
api.use("/rescues", rescue);
api.use("/products", product);

api.use(errorHandler);

module.exports = api;
