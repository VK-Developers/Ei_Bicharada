const { adoption: service } = require('../services');

module.exports = {
    getAll: async (req, res, _next) => {
        const accepted = req.query.accepted;
        const {status, result} = await service.getAll(accepted);
        return res.status(status).json(result);
    },
    getById: async (req, res, _next) => {
        const { id } = req.params;
        const {status, result} = await service.getById(id);
        return res.status(status).json(result);
    },
};