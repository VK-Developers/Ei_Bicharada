require('dotenv').config();
const functions = require("firebase-functions");
const app = require('./api');

const PORT = process.env.API_PORT;

app.get('/', (_request, response) => response.send('Hey Pet! API'));

app.listen(PORT, () => console.log("API running on " + PORT));

exports.api = functions.https.onRequest(app);