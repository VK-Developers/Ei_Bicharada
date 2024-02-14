const { contribution: service } = require('../services');

module.exports = {
    getAll: async (req, res, _next) => {
        const token = req.headers.authorization;

        const {status, result} = await service.getAll(token);
        return res.status(status).json(result);
    },
};