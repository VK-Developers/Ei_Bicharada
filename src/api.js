const express = require("express");
require("express-async-errors");

const routes = require("./routes");
const { cors } = require("./tools");
const { errorHandler } = require("./middlewares");

const api = express();

api.use(express.json());
api.use(cors);

const SERVER_INDEX = "hey-pet";

// View Pictures
api.use('/uploads', routes.picture)

// Requests `/${SERVER_INDEX}/infos`
api.use(`/${SERVER_INDEX}/infos`, routes.information);
api.use(`/${SERVER_INDEX}/login`, routes.login);
api.use(`/${SERVER_INDEX}/users`, routes.user);
api.use(`/${SERVER_INDEX}/regions`, routes.region);
api.use(`/${SERVER_INDEX}/adoptions`, routes.adoption);
api.use(`/${SERVER_INDEX}/missing-animals`, routes.missingAnimal);
api.use(`/${SERVER_INDEX}/rescues`, routes.rescue);
api.use(`/${SERVER_INDEX}/complains`, routes.complain);
api.use(`/${SERVER_INDEX}/homes`, routes.home);
api.use(`/${SERVER_INDEX}/products`, routes.product);
api.use(`/${SERVER_INDEX}/news-events`, routes.newEvent);
api.use(`/${SERVER_INDEX}/contributions`, routes.contribution);
api.use(`/${SERVER_INDEX}/sponsors`, routes.sponsor);
api.use(`/${SERVER_INDEX}/victims`, routes.victim);
api.use(`/${SERVER_INDEX}/raffles`, routes.raffle);

api.use(`/${SERVER_INDEX}/raffles-number`, routes.raffleNumber);

api.use(errorHandler);

module.exports = api;
