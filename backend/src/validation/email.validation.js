const data = require('../data/user.json');

const MSG = [
      { check: false, msg: 'O campo "email" é obrigatório' },
      { check: false, msg: 'O "email" deve ter o formato "email@email.com"' },
      { check: true, msg: 'Email checked' },
    ];
    
const emailFormat = (email) => {
      const regex = /\S+@\S+\.\S+/.test(email)

      if (!email || email.length === 0) return MSG[0];
      if (!regex) return MSG[1];

      return MSG[2];
};

const emailExists = (email) => {
      const checkIt = data.some(data => data.email === email)
      return checkIt
};

module.exports = {
      emailFormat,
      emailExists
}