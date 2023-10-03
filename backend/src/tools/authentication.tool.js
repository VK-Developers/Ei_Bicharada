const jwt = require("jsonwebtoken");

const SECRET = 'leite-ninho';
const CONFIG = { expiresIn: "1d", algorithm: "HS256" };

const createToken = (data) => jwt.sign({data}, SECRET, CONFIG);

const verifyToken = (token) => jwt.verify(token, SECRET);

const checkToken = (token) => {
  const user = jwt.verify(token, SECRET);
  console.log(user.data);
  return user.data;
};

module.exports = {
  createToken,
  verifyToken,
  checkToken,
};
