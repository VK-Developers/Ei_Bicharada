require('dotenv').config();
const api = require('./api');

const PORT = process.env.API_PORT;

api.get('/', (_request, response) => response.send('Hey Bicharada API'));

api.listen(PORT, () => console.log("API running on " + PORT));