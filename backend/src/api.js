const express = require("express");
require("express-async-errors");
const path = require('path');

const { 
  user,
  rescue,
  product,
  login,
  adoption,
  missingAnimal,
  complain,
  home,
  newEvent,
  sponsor,
  victim,
  contribution,
} = require("./routes");

const { cors } = require("./tools");
const { errorHandler } = require("./middlewares");

const api = express();
api.use(express.json());
api.use(cors);

api.use("/login", login);
api.use("/users", user);
api.use("/adoptions", adoption);
api.use("/missing-animals", missingAnimal);
api.use("/rescues", rescue);
api.use("/complains", complain);
api.use("/homes", home);
api.use("/products", product);
api.use("/news-events", newEvent);
api.use("/contributions", contribution);
api.use("/sponsors", sponsor);
api.use("/victims", victim);

api.use('/pictures/adoptions/', express.static(path.join(__dirname, '../uploads/adoptions')));
api.use('/pictures/missing-animals/', express.static(path.join(__dirname, '../uploads/missing-animals')));
api.use('/pictures/rescues/', express.static(path.join(__dirname, '../uploads/rescues')));
api.use('/pictures/complains/', express.static(path.join(__dirname, '../uploads/complains')));

api.use(errorHandler);

module.exports = api;
