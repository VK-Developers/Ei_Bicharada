const { product: service } = require('../services');
// const { products: validation } = require('../validations')

module.exports = {
    getAll: async (_req, res, _next) => {
        const result = await service.getAll();
        return res.status(200).json(result);
    },
};