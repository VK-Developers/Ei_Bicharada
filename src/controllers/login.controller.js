const { login: service } = require("../services");

module.exports = {
  logIn: async (req, res, _next) => {
    const data = req.body;
    const {status, ...result} = await service.logIn(data);
    return res.status(status).json({...result});
  },
  update: async (req, res, _next) => {
    const data = req.body;
    const { id } = req.params;
    const {status, result} = await service.update(data, id);
    return res.status(status).json(result);
  },
  destroy: async(req, res, _next) => {
    const { id } = req.params;
    const {status, result} = await service.destroy(id);
    return res.status(status).json(result);
}
};
