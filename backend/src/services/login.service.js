const models = require("../database/models");
const { authentication: { createToken } } = require("../tools");
const { login: validation } = require('../validations')

const reject = {
  status: 401,
  msg: 'senha ou email invalidos'
}

module.exports = async (data) => {
  const { password, email } = await validation(data);

  const founded = await models.login.findOne({ where: { email } });

  if (!!founded) {
    if (founded.password === password) {
      const userData = await models.user.findOne({ where: { email } });
      const token = createToken(userData);
      return { status: 400, token }
    };
    return reject;
  };

  return reject;
};
