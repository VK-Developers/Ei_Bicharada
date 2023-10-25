const { complain: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const {status, result} = await service.getAll();
        return res.status(status).json(result);
    },
    getById: async (req, res, _next) => {
        const { id } = req.params;
        const {status, result} = await service.getById(id);
        return res.status(status).json(result);
    },
    update: async(req, res, _next) => {
        const toBeUpdated = req.body;
        const { id } = req.params;
        const {status, result} = await service.update(toBeUpdated, id)
        return res.status(status).json(result);
    },
    create: async(req, res, _next) => {
        const token = req.headers.authorization;
        const data = JSON.parse(req.body.data);
        const photo = req.file.filename;

        const {status, result} = await service.create(
            {
                ...data, 
                picture: 'uploads/complains/' + photo
            }, 
            token
        );


        return res.status(status).json(result);
    },
    destroy: async(req, res, _next) => {
        const { id } = req.params;
        const {status, result} = await service.destroy(id);
        return res.status(status).json(result);
    }
};