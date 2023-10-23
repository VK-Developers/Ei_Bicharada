const { victim: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const {status, result} = await service.getAll();
        return res.status(status).json(result);
    },
    create: async(req, res, _next) => {
        const token = req.headers.authorization;

        const {status, result} = await service.create(token);
        return res.status(status).json(result);
    },
};