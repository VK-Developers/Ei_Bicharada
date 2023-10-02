const { login: service } = require("../services");
// const { products: validation } = require('../validations')

module.exports = async (req, res, _next) => {
  const data = req.body;
  const validation = await service(data);

  return res.status(200).json(validation);
};
