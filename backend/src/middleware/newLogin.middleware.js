const {
      email: {emailExists},
      password: {passwordExists}
} = require('../validation/index')

const OK = 200;
const BAD = 400;

module.exports = async (req, res, _next) => {
      const { email, password } = req.body;

      const checkEmail = emailExists(email);
      const checkPassword = passwordExists(password);

      if (!checkEmail || !checkPassword) return res.status(BAD).json({msg: 'Email/Senha Invalido'})

      return res.status(OK).json({msg: "OK"})
};
