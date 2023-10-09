const { login: service } = require("../services");

module.exports = async (req, res, _next) => {
  const data = req.body;
  const {status, ...result} = await service(data);
  return res.status(status).json({...result});
};
