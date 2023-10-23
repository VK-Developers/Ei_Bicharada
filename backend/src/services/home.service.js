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
    }
}