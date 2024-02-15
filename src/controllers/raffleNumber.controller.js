const { raffleNumber: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const result = await service.getAll();
        return res.status(200).json(result);
    },
    getById: async (req, res, _next) => {
        const { id } = req.params;
        const result = await service.getById(id);
        return res.status(200).json(result);
    },
    create: async (req, res, _next) => {
        const token = req.headers.authorization;
        const obj = req.body;
        
        const {status, msg} = await service.create(obj, token);

        return res.status(status).json(msg);
    },
};
