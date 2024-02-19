require('dotenv').config();
const app = require('./api');

const PORT = process.env.API_PORT;
const SERVER_INDEX = "hey-pet"

app.get(`/${SERVER_INDEX}`, (_request, response) => response.json("Wellcome to Hey Pet API!!"));

app.listen(PORT, () => console.log("API running on " + PORT));
