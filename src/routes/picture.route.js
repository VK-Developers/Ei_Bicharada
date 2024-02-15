const express = require('express');
const path = require('path');

// const { token } = require('../middlewares')

const picture = express.Router();

const folder = (where) =>  `../../uploads/${where}`;

picture
     .use("/adoptions", [express.static(path.join(__dirname, folder('adoptions')))])
     .use("/missing-animals", [express.static(path.join(__dirname, folder('missing-animals')))])
     .use("/rescues", [express.static(path.join(__dirname, folder('rescues')))])
     .use("/complains", [express.static(path.join(__dirname, folder('complains')))])

module.exports = picture;