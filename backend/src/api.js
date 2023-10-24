const express = require("express");
require("express-async-errors");

const routes = require("./routes");

const { cors } = require("./tools");
const { errorHandler } = require("./middlewares");

const api = express();
api.use(express.json());
api.use(cors);

api.use("/login", routes.login);
api.use("/users", routes.user);
api.use("/adoptions", routes.adoption);
api.use("/missing-animals", routes.missingAnimal);
api.use("/rescues", routes.rescue);
api.use("/complains", routes.complain);
api.use("/homes", routes.home);
api.use("/products", routes.product);
api.use("/news-events", routes.newEvent);
api.use("/contributions", routes.contribution);
api.use("/sponsors", routes.sponsor);
api.use("/victims", routes.victim);

api.use('/uploads', routes.picture)

api.use(errorHandler);

module.exports = api;
