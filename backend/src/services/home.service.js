const models = require('../database/models');
const { home: validation } = require('../validations');

module.exports = {
    getAll: async () => {
        const result = await models.home.findAll();
        return {status: 200, result};
    },
    create: async(data) => {

        const validatedObj = await validation.new(data);

        const newHome = await models.home.create(validatedObj);
        return {status: 201, result: newHome};
    },
    update: async(obj, id) => {
        const [updatedHome] = await models.home.update(obj, {
            where: { id }
        });

        if (updatedHome !== 1) return {status: 204, result: null};

        return {status: 200, result: 'home updated'};
    },
    destroy: async (id) => {
        const requestDelete = await models.home.destroy({ where: { id } });

        if (requestDelete !== 1) return {status: 204, result: null};

        return {status: 200, result: 'home deleted'};
    }
}