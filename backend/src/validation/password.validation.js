const data = require('../data/user.json');

const LENGTH = 6;
const MSG = [
      { check: false, msg: 'O campo "password" é obrigatório' },
      { check: false, msg: 'O "password" deve ter pelo menos 6 caracteres' },
      { check: true, msg: 'Password checked' },
];

const passwordFormat = (password) => {
      if (!password || password.length === 0) return MSG[0];
      if (password.length < LENGTH) return MSG[1];

      return MSG[2];
};

const passwordExists = (password) => {
      const checkIt = data.some(data => data.password === password)
      return checkIt
};

module.exports = {
      passwordFormat,
      passwordExists
}