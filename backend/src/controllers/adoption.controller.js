const { adoption: service } = require('../services');

module.exports = {
    getAll: async (req, res, _next) => {
        const accepted = req.query.accepted;
        const token = req.headers.authorization;

        const {status, result} = await service.getAll(accepted, token);
        return res.status(status).json(result);
    },
    getById: async (req, res, _next) => {
        const { id } = req.params;
        const {status, result} = await service.getById(id);
        return res.status(status).json(result);
    },
    create: async (req, res, _next) => {
        const obj = req.body;
        const token = req.headers.authorization;

        const {status, msg} = await service.create(obj, token);
        
        return res.status(status).json(msg);
    },
};