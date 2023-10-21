const models = require('../database/models');
const { rescue: validation } = require('../validations');
const { authentication } = require('../tools');

module.exports = {
    getAll: async () => {
        const result = await models.rescue.findAll({
            attributes: { exclude: ['userId'] }
        });

        return {status: 200, result};
    },
    getById: async (id) => {
        const rescue = await models.rescue.findByPk(id, {
            include: {
                model: models.user, 
                as: 'user',
                attributes: { exclude: ['id', 'accepted', 'created'] }
            },
            attributes: { 
                exclude: ['userId']
            }
        });

        if (!rescue) return {status: 404, result: []}; 
        return {status: 200, result: rescue};
    },
    update: async(obj, id) => {
        const [updatedRescue] = await models.rescue.update(obj, {
            where: { id }
        });

        if (updatedRescue !== 1) return {status: 204, result: null};

        return {status: 200, result: 'rescue updated'};
    },
    create: async(obj, token) => {
        console.log(obj)
        const {email, region} = authentication.verifyToken(token);
        const validatedObj = await validation.new(obj)
        
        const newRescue = await models.rescue.create({
            ...validatedObj,
            user: email,
            region,
        });
        return {status: 201, result: newRescue};
    },
    destroy: async(id) => {
        const rescueDeleted = await models.rescue.destroy({ where: { id } });

        if (rescueDeleted !== 1) return {status: 204, result: null};

        return {status: 200, result: 'rescue deleted'};
    }
}