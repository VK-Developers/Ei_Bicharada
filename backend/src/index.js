const express = require("express");
const { cors } = require("./utils");

const { login } = require("./routes/index");

PORT = process.env.API_PORT | 3002;

const api = express();
api.use(express.json());
api.use(cors);

api.use("/login", login);

api.get("/", (_res, res, _next) => {
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).send("API Developed for Olha Aqui Bicharada App");
});

api.listen(PORT, () => {
      console.log(`Application running on localhost:${PORT}`);
});
