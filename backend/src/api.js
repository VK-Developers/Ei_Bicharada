const express = require("express");
require("express-async-errors");
const { 
     user,
     rescue,
     product,
     login,
     adoption,
     missingAnimal,
     complain,
     newEvent,
     sponsor
} = require("./routes");

const { cors } = require("./tools");
const { errorHandler } = require("./middlewares");

const api = express();
api.use(express.json());
api.use(cors);

api.use("/login", login);
api.use("/users", user);

api.use("/adoptions", adoption); // enviar fotos
api.use("/missing-animals", missingAnimal); // enviar fotos
api.use("/rescues", rescue); // enviar fotos
api.use("/complains", complain); // enviar fotos
// api.use("/home", home);
api.use("/products", product);
api.use("/news-events", newEvent);
api.use("/sponsors", sponsor);

api.use(errorHandler);

module.exports = api;
