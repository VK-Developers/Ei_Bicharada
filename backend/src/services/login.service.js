const models = require("../database/models");
const { authentication: { createToken } } = require("../tools");
const { login: validation } = require('../validations')

const reject = {
  status: 401,
  msg: 'senha ou email invalidos'
}

const addToLogTable = async (data) => {
  const {name, phone} = data;

  const obj = {
    name,
    phone,
    acessed: new Date()
  }

  await models.loginLog.create(obj);
}

module.exports = async (data) => {
  const { password, email } = await validation(data);

  const adm = await models.adm.findOne({ where: { email, password } });

  if (!!adm) {
    const admData = await models.userAdm.findOne({ where: { email } });
    console.log(admData)
    const token = createToken(admData);
    return { status: 200, token, type: 'adm'}
  }

  const founded = await models.login.findOne({ where: { email } });

  if (!!founded) {
    if (founded.password === password) {
      const userData = await models.user.findOne({ where: { email } });

      await addToLogTable(userData)

      const token = createToken(userData);
      return { status: 200, token, type: 'user'}
    };
    return reject;
  };

  return reject;
};
