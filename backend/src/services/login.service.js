const models = require("../database/models");
const { authentication } = require("../tools");

module.exports = async (data) => {
  const { password, email } = data;

  const checkUserEmail = await models.login.findOne({ where: { email } });

  const token = authentication.create(userData, password);

  return token;
};
