const path = require('path');
const fs = require('fs');
const userData = require('../data/user.json')
const {
      email: {emailFormat},
      password: {passwordFormat}
} = require('../validation/index');

const OK = 200;
const BAD = 400;

const updateFile = (data) => {
      const filePath = path.join(__dirname, '../data/user.json');
      const file = fs.readFileSync(filePath, 'utf8');
      const updated = JSON.parse(file);

      const id = userData.length + 1

      updated.push({id, ...data})

      fs.writeFileSync(filePath, JSON.stringify(updated));

      return updated;
}

module.exports = async (req, res, _next) => {
      const { name, age, email, password } = req.body;

      const checkEmail = emailFormat(email);
      const checkPassword = passwordFormat(password);
      
      if (!checkEmail.check) return res.status(BAD).json(checkEmail);
      if (!checkPassword.check) return res.status(BAD).json(checkPassword);

      const newUser = { name, age, email, password }

      const test = updateFile(newUser)

      return res.status(OK).json(test)
};
