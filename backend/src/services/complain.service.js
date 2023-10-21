const models = require('../database/models');
const { complain: validation } = require('../validations');
const { authentication } = require('../tools');

module.exports = {
    getAll: async () => {
        const result = await models.complain.findAll();

        return {status: 200, result};
    },
    getById: async (id) => {
        const result = await models.complain.findByPk(id);

        if (!result) return {status: 404, result: []}; 
        return {status: 200, result};
    },
    update: async(obj, id) => {
        const [updatedComplain] = await models.complain.update(obj, {
            where: { id }
        });

        if (updatedComplain !== 1) return {status: 204, result: null};

        return {status: 200, result: 'complain updated'};
    },
    create: async(obj, token) => {
        const {email, region} = authentication.verifyToken(token);
        const validatedObj = await validation.new(obj);
        
        const newComplain = await models.complain.create({
            ...validatedObj,
            user: email,
            region,
        });
        return {status: 201, result: newComplain};
    },
    destroy: async(id) => {
        const complainDeleted = await models.complain.destroy({ where: { id } });

        if (complainDeleted !== 1) return {status: 204, result: null};

        return {status: 200, result: 'complain deleted'};
    }
}