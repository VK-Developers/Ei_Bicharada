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
        const token = req.headers.authorization;
        const data = JSON.parse(req.body.data);
        const photo = req.file.filename;

        const {status, msg} = await service.create(
            {
                ...data, 
                picture: 'uploads/adoptions/' + photo
            }, 
            token
        );
        
        return res.status(status).json(msg);
    },
};