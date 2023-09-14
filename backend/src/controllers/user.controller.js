const { user: service } = require('../services');

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
    update: async(req, res, _next) => {
        const toBeUpdated = req.body;
        const { id } = req.params;
        const result = await service.update(toBeUpdated, id)
        return res.status(200).json(result);
    },
    create: async(req, res, _next) => {
        const infos = req.body;
        const result = await service.create(infos);
        return res.status(201).json(result);
    },
    destroy: async(req, res, _next) => {
        const { id } = req.params;
        const result = await service.destroy(id);
        return res.status(200).json(result);
    }
};