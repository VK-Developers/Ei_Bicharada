const { login: service } = require("../services");

module.exports = async (req, res, _next) => {
  const data = req.body;
  const result = await service(data);
  return res.status(200).json({...result});
};
